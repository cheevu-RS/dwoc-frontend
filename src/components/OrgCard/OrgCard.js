import React from "react";
// import "./App.css";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
// import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  title: {},
  description: {
    marginTop: 5,
    fontSize: 22
  },
  nProejct: {
    fontSize: 19,
    marginTop: 8,
    textAlign: "left"
  }
});

function OrgCard({ orgTitle, orgDescription, orgID }) {
  const classes = useStyles();
console.log(`${orgID} <= orgID`);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          orgTitle
        </Typography>
        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
          Org Org Org Org Description Description Description Description
        </Typography>
        <Typography className={classes.nProejct} color="textSecondary">
          This Org has 5 projects
        </Typography>
      </CardContent>

      <CardActions>
          {/* <Link to={`/${orgID}`}> */}
        <Button size="small" color="primary" variant="outlined">View projects</Button>
        {/* </Link> */}
      </CardActions>
    </Card>
    
  );
}

export default OrgCard;
