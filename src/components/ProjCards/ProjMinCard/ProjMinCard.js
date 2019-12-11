/* @flow */

//React
import React from "react";
import { Link } from "react-router-dom";

// Material
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

//Components
import ProjMaxCard from "../ProjMaxCard/ProjMaxCard";

// Style imports
import { OrgProjCard } from "../../../DwocStyles";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Source Sans Pro",
      "Rubik",
      "Lato",
      "Roboto Mono",
      OrgProjCard.stacks.fontFamily,
      OrgProjCard.description.fontFamily
    ]
  }
});

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    opacity: 100,
    position: "relative",
    display: "flex",
    flexFlow: "column",
    padding: 0,
    color: "#000000",
    ...OrgProjCard
  },
  title: {
    textAlign: "left",
    fontSize: 26,
    margin: 0,
    fontFamily: "Rubik",
    color: "#000000",
    padding: "10px 15px 0px 15px"
  },
  mentorName: {
    fontSize: 16,
    lineHeight: 0.8,
    display: "block",
    padding: "0px 15px"
  },
  description: OrgProjCard.description,
  projects: {
    fontSize: 19,
    marginTop: 8,
    textAlign: "left"
  },
  viewProjectsBtn: {
    color: "#05386B"
  },

  CardRowTwo: {
    flex: "0 1 auto",
    display: "flex",
    margin: "10px 0 15px 0",
    padding: "0px 8px 0px 8px",
    justifyContent: "space-evenly",
    borderTop: "1px solid #BDBDBD"
  },
  CardRowTwoElements: {
    flex: 1,
    textAlign: "center",
    marginTop: 5
  },
  CardRowTwoContent: {
    fontSize: 20,
    margin: 0,
    padding: 0,
    fontWeight: 500
  },
  CardRowTwoDetail: {
    fontSize: 17,
    margin: 0,
    padding: 0,
    display: "block",
    lineHeight: 0.6,
    color: "#424242"
  },
  BtnViewProjects: {
    flex: "0 1 auto",
    backgroundColor: "#F6F6F6",
    width: "100%"
  }
}));

export default function ProjMinCard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3} xl={3}>
      <Card className={classes.card}>
        <div className={classes.title}>{props.projName}</div>

        <div className={classes.description}>{props.projMinDesc}</div>
        <CardActions>
          <ProjMaxCard
            btnText="Read more"
            orgName={props.orgName}
            projName={props.projName}
            projDesc={props.projDesc}
            taken={props.taken}
            isLogged={props.isLogged}
            {...props}
          />

          {props.role=="Mentor"&&
          <Button variant="contained" className={classes.button}>
            <Link
              to={{
                pathname: '/proposal',
                data: {
                  projSlug: props.projSlug
                }
              }}
            >
              View Proposal
            </Link>

          </Button>
        }

        </CardActions>
      </Card>
    </Grid>
  );
}
