import React from "react";
// import "./App.css";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    marginLeft: "15px",
    marginTop: "30px",
    backgroundColor: "#EDF5E1",
    color: "#05386B",
  },
  title: {
    textAlign: "center",
  },
  description: {
    marginTop: 5,
    fontSize: 20,
  },
  projects: {
    fontSize: 19,
    marginTop: 8,
    textAlign: "left"
  },
  viewProjectsBtn: {
    color: "#05386B",
  }
});

function OrgCard(props) {
  const classes = useStyles();
  // console.log(`${props.orgID} <= orgID`);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h4">
          Org Title
        </Typography>
        <div style={{ height: "20px" }}></div>
        <Typography className={classes.description} component="p">
          Description and goals of the org
        </Typography>
        <p className={classes.projects}>
          This Org has {props.noOfProjects} projects
        </p>
        {/* <Link to={`/${props.orgID}`}> */}

        {/* </Link> */}
      </CardContent>
        
      <CardActions>
          <Button size="small" className={classes.viewProjectsBtn}>View projects</Button>
      </CardActions>
    </Card>

  );
}

export default OrgCard;
