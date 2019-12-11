import React, { useEffect } from "react";
import ProjCard from "./ProjMinCard/ProjMinCard";
import ProposalMessage from "./ProposalMessage/ProposalMessage";
import { Link } from "react-router-dom";

// Material UI
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RingLoader from "react-spinners/RingLoader";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import WebFont from "webfontloader";
import Icon from "@material-ui/core/Icon";
import { css } from "@emotion/core";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Form from "./AddProjectForm/Form";
import { header1, header2, gridContainer } from "../../DwocStyles";

import MentorTags from "../../components/MentorTags/MentorTags";
const environment = require("../../Environment").environment;

WebFont.load({
  google: {
    families: [header1.fontFamily, header2.fontFamily]
  }
});

const useStyles = makeStyles(theme => ({
  container: {
    //minWidth: '93%',
    //paddingLeft: '2%'
  },
  header1: header1,
  header2: { ...header2 },
  gridContainer: gridContainer,
  addProjBtn: {
    color: "white",
    borderRadius: `10px`,
    transition: `0.2s`,
    "&:before, &:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: 0,
      height: `100%`,
      transition: `0.4s`,
      background: "black"
    },
    "&:before": {
      borderRadius: `10px 0 0 10px`
    },
    "&:after": {
      borderRadius: `0 10px 10px 0`,
      left: "auto",
      right: 0
    },
    "&:hover": {
      "&:after, &:before": {
        width: `50%`
      },
      "& .textClass": {
        color: `#5CDB95`,
        zIndex: 100
      },
      centr: {
        display: "flex",
        justifyContent: "center"
      }
    }
  },
  centr: {
    display: "flex",
    justifyContent: "center"
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
  //const defaultTools = ['C++', 'Python'];
  let tools = props.location.state.stack;
  const isLogged = props.isLogged;
  const orgID = props.match.params.id;
  const role = props.role;

  const userId = props.userId;

  const applyRoute = `/org/${orgID}/${orgName}/apply`;
  //const role= props.match.params.role;
  const mentorsList = props.location.state.mentors;
  const orgDesc = props.location.state.orgDesc;
  const orgSlug = props.location.state.orgSlug;
  console.log(`${JSON.stringify(props)} <= props in ProjCards`);
  console.log(props.location.state);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [open, setOpen] = React.useState(false);
  const [applyBtn, setApplyBtn] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const applyFn = value => {
    setApplyBtn(value);
  };
  return (
    <div className={classes.container}>
      <br />
      <br />
      <h1 className={classes.header1}>{orgName}</h1>
      <br />
      <h2 className={classes.header2}>Projects</h2>

      {props && props.role == "Mentor" && (
        <div className={classes.centr}>
          <Button variant="contained" className={classes.button}>
            <Link
              to={{
                pathname: "/proposal",
                data: {
                  orgName: orgID
                }
              }}
            >
              View Proposal
            </Link>
          </Button>
        </div>
      )}

      <QueryRenderer
        environment={environment}
        query={graphql`
          query ProjCardsQuery($orgid: ProjectWhereInput) {
            projects(where: $orgid) {
              id
              projName
              projSlug
              projMinDesc
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
              <>
                <br />
                {/* <h2 className={classes.header1}>Projects under {orgName}</h2> */}
                <div style={{ paddingTop: "20%" }}>
                  <RingLoader css={override} color={"#5CDB95"} />
                </div>
              </>
            );
          }
          let applyBtnDiv = <></>;
          if (applyBtn === true) {
            applyBtnDiv = (
              <Link
                to={{
                  pathname: applyRoute,
                  state: {
                    projDesc: orgDesc,
                    projName: orgName,
                    tools: tools
                  }
                }}
              >
                {isLogged && (
                  <div className={classes.centr}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      size="large"
                    >
                      Apply
                    </Button>
                  </div>
                )}
              </Link>
            );
          }

          let addProjectMenu;
          if (role && role.toLowerCase() === "mentor")
            addProjectMenu = (
              <div className={classes.centr}>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={handleClickOpen}
                >
                  Add Project
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Add New Project
                  </DialogTitle>
                  <Form onClose={handleClose} orgName={orgSlug} />
                </Dialog>
              </div>
            );
          return (
            <>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <Grid container className={classes.gridContainer} spacing={3}>
                  {props.projects.map(project => (
                    <ProjCard
                      tools={tools}
                      projName={project.projName}
                      orgName={orgName}
                      projDesc={project.projDesc}
                      projMinDesc={project.projMinDesc}
                      {...project}
                      isLogged={isLogged}
                      key={project.id}
                      role={role}
                      userId={userId}
                    />
                  ))}
                </Grid>
              </div>
              <ProposalMessage canApply={applyFn} userId={userId} />
              <br />
              {applyBtnDiv}

              <br />
              <h2 className={classes.header2}>Mentors</h2>
              <MentorTags mentors={mentorsList} />
              {addProjectMenu}
            </>
          );
        }}
      />
    </div>
  );
}
