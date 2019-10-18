import React, { useEffect } from "react";
import ProjCard from "./ProjMinCard/ProjMinCard";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import RingLoader from "react-spinners/RingLoader";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { css } from "@emotion/core";

const environment= require( "../../Environment").environment;
const useStyles = makeStyles(theme => ({
  container: {
    minWidth: "93%",
    paddingLeft: "2%"
  }
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Projects(props) {
  const classes = useStyles();
  const orgName = props.match.params.orgName;
  const defaultTools = ["C++", "Python"];
  const isLogged = props.isLogged;
  const orgID = props.match.params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.container}>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ProjCardsQuery($orgid: ProjectWhereInput) {
            projects(where: $orgid) {
              id
              projName
              projSlug
              projDesc
              githubUrl
              organization {
                id
              }
            }
          }
        `}
        variables={{ orgid: { organization: { id: orgID } } }}
        render={({ error, props }) => {
          if (error) {
            console.log(`${error} <= error Relay ProjCards`);
            return <div>Error!</div>;
          }
          if (!props) {
            return (
              <div>
                <h2 style={{ textAlign: "center" }}>
                  {orgName}
                </h2>
                <div style={{ paddingTop: "20%" }}>
                  <RingLoader css={override} color={"#5CDB95"} />
                </div>
              </div>
            );
          }
          // console.log(`${JSON.stringify(props)} <= props in ProjCards  `);

          let n = props.projects.length;
          const allProjects = props.projects;
          let structuredProjects = [];

          for (let i = 0; i < n; i += 4) {
            let row = [];
            for (let j = i; j < i + 4; j++) {
              if (j >= n) break;
              row.push(allProjects[j]);
            }
            while (row.length < 4) row.push([]);
            structuredProjects.push(row);
          }
          let num = 1;

          return (
            <div>
              <br />
              <br />
              <h2 style={{ textAlign: "center", marginTop: "5px" }}>{orgName}</h2>
              <Grid key={num++} container className={classes.gridContainer} spacing={3}>
                 {structuredProjects.map(proj => (
                    proj.map(o => 
                    o.id ? (<ProjCard key={num++} tools={defaultTools} key={num++} projName={o.projName} orgName={orgName} projDesc={o.projDesc}   {...o} isLogged={isLogged} />) : (<div key={num++}></div>)
                  )
                  ))}
              </Grid>
            </div>
          );
        }}
      />
    </div>
  );
}
