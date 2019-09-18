import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Flip from 'react-reveal/Flip';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',  
  },
  card: {
    backgroundColor: "#EDF5E1",
    color: "#05386B",
    marginTop: '30px',
    maxWidth: "400px",
  },
  title: {
    textAlign: "left",
  },
  description: {
    marginTop: 8,
    fontSize: 20,
  },
  projects: {
    fontSize: 19,
    marginTop: 8,
    textAlign: "left"
  },
  viewProjectsBtn: {
    color: "#05386B",
  },
  cardActions: {
    paddingTop: "0px",
  }
}));

export default function OrgCard(props) {
  const classes = useStyles();

  return (
    <div>
        <Flip left>
          <Card className={classes.card}>
            <CardContent style={{paddingBottom: "0px"}}>
              <Typography className={classes.title} variant="h4">
                Org Title
              </Typography>
              <Typography className={classes.description} component="p">
                Description and goals of the org
              </Typography>
              <p className={classes.projects}>
                This Org has {props.noOfProjects} projects
              </p>
            </CardContent>

            <CardActions className={classes.cardActions}>
              {/* <Link to={`/${props.orgID}`}> */}
                <Button size="small" className={classes.viewProjectsBtn}>View projects</Button>
              {/* </Link> */}
            </CardActions>
          </Card>
        </Flip>
    </div>
  );
}