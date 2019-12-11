//React, Relay
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { commitMutation } from "react-relay";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";
import MutationRenderer from "./MutationRenderer";

//Material
import {
  Button,
  CssBaseline,
  makeStyles,
  Input,
  Container
} from "@material-ui/core";
import { header1, header2, header3, colours } from "../../DwocStyles";

const Cookie = require("js-cookie");
/*
curl https://delta.nitt.edu/dwocb \
  -F operations='{ "query": "mutation ($file: Upload!) { uploadFile(file: $file) { fileName } }", "variables": { "file": null } }' \
  -F map='{ "0": ["variables.file"] }' \
  -F 0=@f1.txt
  */
function fetchQuery(operation, variables) {
  var data = new FormData();
  data.append(
    "operations",
    '{ "query": "mutation ($file: Upload!) { uploadFile(data: $file) { fileName, filePath } }", "variables": { "file": null } }'
  );
  data.append("map", '{ "0": ["variables.file"] }');
  data.append("0", variables.file);

  // console.log(`${data} <= data in ProposalForm`);
  // console.log(`${JSON.stringify(data)} <= data in ProposalForm`);
  return fetch("https://dwoc.io/dwocb", {
    method: "POST",
    headers: {
      session: JSON.parse(Cookie.get("dwoc_user_session")).session,
      id: JSON.parse(Cookie.get("dwoc_user_session")).id,
      ContentType:
        "multipart/form-data; boundary=--------------------------493219481310761479495526"
    },
    body: data
  })
    .then(response => {
      // console.log(`${JSON.stringify(response)} <= response in fetchQuery`);
      return response.json();
    })
    .catch(err =>
      console.error(`${err} <== error in ProposalForm fetch query`)
    );
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderBottom: `3px solid ${colours.deltaLogoGreen}`,
    padding: theme.spacing(4),
    borderRadius: 10,
    color: "#05386b"
  },
  heading: { ...header1, color: "inherit" },
  form: {
    marginTop: theme.spacing(1),
    width: `100%`,
    textAlign: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    //backgroundColor: '#22627D',
    backgroundColor: colours.navBarBlue,
    color: "dark-grey"
  },
  projectOrg: {
    ...header2,
    color: "inherit",
    //textAlign: 'center',
    //fontSize: 1.4 * theme.typography.fontSize,
    marginBottom: 5,
    marginTop: theme.spacing(4)
    //textTransform: 'uppercase',
    //fontWeight: '700'
  },
  projectTitle: {
    ...header3,
    marginTop: theme.spacing(0),
    color: "inherit"
  },
  projectTags: {
    textAlign: "center",
    marginBottom: theme.spacing(1.5)
  },
  projectDescription: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Lato"
  },
  projectMentors: {
    marginBottom: theme.spacing(1),
    textAlign: "center"
  },
  projectProposalInput: {
    width: 95,
    fontSize: 16,
    borderRadius: 5
  }
}));

const mutation = graphql`
  mutation ProposalFormMutation($file: Upload!) {
    uploadFile(data: $file) {
      fileName
      filePath
    }
  }
`;

const ProposalForm = props => {
  const classes = useStyles();
  let [uploadedFile, setUploadedFile] = useState("");
  // mutationStatus(Object) tells if mutation should be done(true/false), and has items for the mutation
  let [mutationStatus, setMutationStatus] = useState({
    mutStatus: false,
    propUrl: "",
    userID: "",
    orgID: ""
  });

  useEffect(() => {
    var input = document.getElementById("proposalFile");

    input.addEventListener("change", event => {
      var input = event.srcElement;

      var fileName = input.files[0].name;
      setUploadedFile(fileName);
    });
  }, []);
  if (props.location.state === undefined)
    return (
      <Redirect
        to={`/org/${props.match.params.id}/${props.match.params.orgName}`}
      />
    );
  const { projDesc, projName, tools } = props.location.state;
  const { orgName } = props.match.params;
  const mentors = ["Mentor1", "Mentor2"];
  let propUrl = "";
  let mutationRenderer = (
    <div>
      <MutationRenderer
        propUrl={mutationStatus.propUrl}
        userID={mutationStatus.userID}
        orgID={mutationStatus.orgID}
      />
    </div>
  );
  const getFile = evt => {
    evt.preventDefault();
    let file = document.getElementById("proposalFile").files[0];
    console.log(file);
    // console.log(`${JSON.stringify(file.value)} <= file name`);
    commitMutation(environment, {
      mutation,
      variables: { file },
      onCompleted: (response, errors) => {
        // console.log(JSON.stringify(response));
        propUrl = response.uploadFile.filePath;
        // console.log('Response received from server.');
        // console.log("mutStatus: ", mutationStatus.mutStatus)
        let orgID = props.match.params.id;
        let userID = JSON.parse(Cookie.get("dwoc_user_session")).id;
        setMutationStatus({ mutStatus: true, propUrl, userID, orgID });
      },
      onError: err => {
        console.error(err);
        // console.log(`${err} <= err in getFile`);
      }
    });
  };

  const dataURItoBlob = dataURI => {
    var byteString = atob(dataURI.split(",")[1]);
    var mimeString = dataURI
      .split(",")[0]
      .split(":")[1]
      .split(";")[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <span className={classes.heading}>Project Proposal</span>
        <div>
          <p className={classes.projectOrg}>{orgName}</p>
          <hr width="300" style={{ marginTop: 5 }} />
          <p className={`${classes.projectOrg} ${classes.projectTitle}`}>
            {projName}
          </p>
          {/* <div className={classes.projectTags}>
            {tools.map((lang, index) => (
              <StackCard tool={lang} key={index} />
            ))}
          </div> */}
          <p className={classes.projectDescription}>{projDesc}</p>
        </div>
        <form className={classes.form} onSubmit={getFile}>
          <div className={classes.projectProposal}>
            <label htmlFor="proposalFile" style={{ fontSize: 18 }}>
              Proposal: &nbsp;
            </label>

            <input
              type="file"
              id="proposalFile"
              accept=".pdf,.docx"
              className={classes.projectProposalInput}
              required
            />

            <span className={classes.projectDescription}>{uploadedFile}</span>
          </div>
          <div className={classes.projectProposal}>
            (Accepted file formats are pdf, docx)
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Apply
          </Button>
        </form>
        {mutationStatus.mutStatus ? mutationRenderer : null}
      </div>
    </Container>
  );
};

export default ProposalForm;
