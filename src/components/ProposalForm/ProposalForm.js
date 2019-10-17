import React from "react";
import { Button, CssBaseline, makeStyles, Container } from "@material-ui/core";

import Tag from "../Tags/Tag";
import MentorTags from "../MentorTags/MentorTags";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#5CDB95",
    padding: theme.spacing(3),
    borderRadius: 10,
    color: "#05386b"
  },
  heading: {
    textTransform: "uppercase"
  },
  form: {
    marginTop: theme.spacing(1),
    width: `100%`,
    textAlign: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#22627D",
    color: "dark-grey"
  },
  projectOrg: {
    textAlign: "center",
    fontSize: 1.4 * theme.typography.fontSize,
    marginBottom: 5,
    marginTop: theme.spacing(4),
    textTransform: "uppercase",
    fontWeight: "700"
  },
  projectTitle: {
    marginTop: theme.spacing(0)
  },
  projectTags: {
    textAlign: "center",
    marginBottom: theme.spacing(1.5)
  },
  projectDescription: {
    fontSize: 16,
    textAlign: "center"
  },
  projectMentors: {
    marginBottom: theme.spacing(1),
    textAlign: "center"
  },
  projectProposalInput: {
    width: 100,
    fontSize: 16
  }
}));

const ProposalForm = ({
  project = {
    org_name: "Some organisation",
    title: "A very cool project",
    tags: ["Python", "C++"],
    description: `
		On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.
		On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.
		On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.
		On on produce colonel pointed. Just four sold need over how any. In to september suspicion determine he prevailed admitting. On adapted an as affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation breeding be as repeated strictly followed margaret. One gravity son brought shyness waiting regular led ham.
		`,
    mentors: [
      "Mentor A",
      "Mentor B",
      "Mentor A",
      "Mentor B",
      "Mentor A",
      "Mentor B",
      "Mentor A"
    ]
  }
}) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <span className={classes.heading}>Project Proposal</span>
        <div>
          <p className={classes.projectOrg}>{project.org_name}</p>
          <hr width="300" style={{ marginTop: 5 }} />
          <p className={`${classes.projectOrg} ${classes.projectTitle}`}>
            {project.title}
          </p>
          <div className={classes.projectTags}>
            {project.tags.map((lang, index) => (
              <Tag lang={lang} key={index} />
            ))}
          </div>
          <p className={classes.projectDescription}>{project.description}</p>
          <div className={classes.projectMentors}>
            <MentorTags mentors={project.mentors} />
          </div>
        </div>
        <form className={classes.form}>
          <div className={classes.projectProposal}>
            <label htmlFor="proposalFile" style={{ fontSize: 18 }}>
              Proposal: &nbsp;
            </label>
            <input
              type="file"
              id="proposalFile"
              className={classes.projectProposalInput}
              required
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {" "}
            Apply
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ProposalForm;
