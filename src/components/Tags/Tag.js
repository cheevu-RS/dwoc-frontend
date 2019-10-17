import React from "react";
import { Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1),
    fontSize: theme.typography.fontSize,
    backgroundColor: "#22627D",
    boxShadow: `0px 5px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0, 0.12)`,
    color: "white",
    "&:active, &:hover, &:focus": {
      backgroundColor: "#2196f3",
      boxShadow: `0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0, 0.12)`
    }
  }
}));

const Tag = ({ lang = "language" }) => {
  const classes = useStyles();
  return (
    <Chip label={lang} className={classes.chip} component="span" clickable />
  );
};

export default Tag;
