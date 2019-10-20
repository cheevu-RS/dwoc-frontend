//React, Relay
import React from 'react';
import { Redirect } from 'react-router-dom';
import { commitMutation } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import graphql from 'babel-plugin-relay/macro';

//Material
import { Button, CssBaseline, makeStyles, Container } from '@material-ui/core';

import { header1, header2, header3, colours } from '../../DwocStyles';

//Components
//import Tag from '../Tags/Tag';
import StackCard from '../StackCard/StackCard';

/*
curl https://delta.nitt.edu/dwocb \
  -F operations='{ "query": "mutation ($file: Upload!) { uploadFile(file: $file) { fileName } }", "variables": { "file": null } }' \
  -F map='{ "0": ["variables.file"] }' \
  -F 0=@f1.txt
  */
function fetchQuery(operation, variables) {
  var data = new FormData();
  data.append(
    'operations',
    '{ "query": "mutation ($file: Upload!) { uploadFile(file: $file) { fileName } }", "variables": { "file": null } }'
  );
  data.append('map', '{ "0": ["variables.file"] }');
  data.append('0', variables.file);

  return fetch('https://delta.nitt.edu/dwocb', {
    method: 'POST',
    headers: {
      session: 'af0daa02d75b03d25a22f2a7c2aafa6643eeaecc',
      id: 'ck1utqsnp02p608474ggeyzbj',
      ContentType:
        'multipart/form-data; boundary=--------------------------493219481310761479495526'
    },
    body: data
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottom: `3px solid ${colours.deltaLogoGreen}`,
    padding: theme.spacing(4),
    borderRadius: 10,
    color: '#05386b'
  },
  heading: { ...header1, color: 'inherit' },
  form: {
    marginTop: theme.spacing(1),
    width: `100%`,
    textAlign: 'center'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    //backgroundColor: '#22627D',
    backgroundColor: colours.navBarBlue,
    color: 'dark-grey'
  },
  projectOrg: {
    ...header2,
    color: 'inherit',
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
    color: 'inherit'
  },
  projectTags: {
    textAlign: 'center',
    marginBottom: theme.spacing(1.5)
  },
  projectDescription: {
    fontSize: 16,
    textAlign: 'center'
  },
  projectMentors: {
    marginBottom: theme.spacing(1),
    textAlign: 'center'
  },
  projectProposalInput: {
    width: 95,
    fontSize: 16
  }
}));

const mutation = graphql`
  mutation ProposalFormMutation($file: Upload!) {
    uploadFile(file: $file) {
      fileName
    }
  }
`;

const ProposalForm = props => {
  const classes = useStyles();
  if (props.location.state === undefined)
    return (
      <Redirect
        to={`/org/${props.match.params.id}/${props.match.params.orgName}`}
      />
    );
  const { projDesc, projName, tools } = props.location.state;
  const { orgName } = props.match.params;
  const mentors = ['Mentor1', 'Mentor2'];
  const getFile = evt => {
    evt.preventDefault();
    let file = document.getElementById('proposalFile').files[0];
    commitMutation(environment, {
      mutation,
      variables: { file },
      onCompleted: (response, errors) => {
        console.log('Response received from server.');
      },
      onError: err => console.error(err)
    });
  };
  const dataURItoBlob = dataURI => {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
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
          <div className={classes.projectTags}>
            {tools.map((lang, index) => (
              <StackCard tool={lang} key={index} />
            ))}
          </div>
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
            {' '}
            Apply
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ProposalForm;
