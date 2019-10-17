import React from 'react';
import { Redirect } from 'react-router-dom'
import {
	Button,
	CssBaseline,
	makeStyles,
	Container
} from '@material-ui/core';

import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro'

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import Tag from '../Tags/Tag'

function fetchQuery(operation, variables) {
	let body = "--xxBOUNDARYxx"
			+ "\r\nContent-Disposition: form-data; name=\"abc.pdf\""
			+ "\r\nContent-Type: application/pdf"
			+ "\r\n"
			+ JSON.stringify({
				query: operation.text,
				variables
			  })

			  + "\r\n--xxBOUNDARYxx--\r\n"
	return fetch('https://delta.nitt.edu/dwocb', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'multipart/form-data; boundary=xxBOUNDARYxx',
		"session":"af0daa02d75b03d25a22f2a7c2aafa6643eeaecc","id":"ck1utqsnp02p608474ggeyzbj"
	  },
	  body
	}).then(response => {
	  console.error(response)
	  return response.json();
	});
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

const mutation = graphql`
mutation ProposalFormMutation($file: Upload!) {
	uploadFile(file: $file) {
		fileName
	}
}`

const ProposalForm = (props) => {
	const classes = useStyles();
	if (props.location.state === undefined) return <Redirect to={`/org/${props.match.params.id}/${props.match.params.orgName}`}/>
	const {projDesc, projName, tools} = props.location.state;
	const {orgName} = props.match.params;
	// const {projDesc, projName, tools} = {projDesc:'', projName:'', tools:['']};
	// const orgName = '';
	const mentors = ['Mentor1', 'Mentor2'];
	const getFile = evt => {
		evt.preventDefault();
		let file = document.getElementById('proposalFile').files[0];
		console.log(file)
		// contentType = file.type;
		// const reader = new FileReader();
		// reader.readAsArrayBuffer(file)
		// reader.onload = e => {
		// 	console.log('ArrayBuffer')
		// 	console.log(e.target.result)
		// 	reader.readAsBinaryString(file)
		// 	reader.onload = e => {
		// 		console.log('BinaryString')
		// 		console.log(e.target.result)
		// 		reader.readAsDataURL(file)
		// 		reader.onload = e => {
		// 			console.log('DataUrl')
		// 			console.log(e.target.result)
		// 			reader.readAsText(file)
		// 			readerreader.readAsArrayBuffer(file)
		// 			reader.onload = e => {
		// 				console.log('ArrayBuffer')
		// 				console.log(e.target.result)
		// 				reader.readAsBinaryString(file)
		// 				reader.onload = e => {
		// 					console.log('BinaryString')
		// 					console.log(e.target.result)
		// 					reader.readAsDataURL(file)
		// 					reader.onload = e => {
		// 						console.log('DataUrl')
		// 						console.log(e.target.result)
		// 						reader.readAsText(file)
		// 						reader.onload = e => {
		// 							console.log('Text')
		// 							console.log(e.target.result)
		// 						}
		// 					}
		// 				}
		// 			}.onload = e => {
		// 				console.log('Text')
		// 				console.log(e.target.result)
		// 			}
		// 		}
		// 	}
		// }
		// return
		commitMutation(
			environment,
			{
				mutation,
				variables:{file},
				onCompleted: (response, errors) => {
					console.log('Response received from server.')
				},
				onError: err => console.error(err),
			}
		);
		// reader.readAsDataURL(file);
		// reader.onload = e => {
		// 	commitMutation(
		// 		environment,
		// 		{
		// 			mutation,
		// 			variables:{file},
		// 			onCompleted: (response, errors) => {
		// 				console.log('Response received from server.')
		// 			},
		// 			onError: err => console.error(err),
		// 		}
		// 	);
		// }
	}
	const dataURItoBlob = dataURI => {
		var byteString = atob(dataURI.split(',')[1]);
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		return new Blob([ab], {type: mimeString});	
	}
	return (
		<Container component="main" maxWidth="md">
		<CssBaseline />
		<div className={classes.paper}>
			<span className={classes.heading}>Project Proposal</span>
			<div>
				<p className={classes.projectOrg}>{ orgName }</p>
				<hr width='300' style={{marginTop: 5}}/>
				<p className={`${classes.projectOrg} ${classes.projectTitle}`}>{ projName }</p>
				<div className={classes.projectTags}>
					{
					tools.map((lang, index) => (
					<Tag lang={lang} key={index}/>
					))
					}
				</div>
				<p className={classes.projectDescription}>{ projDesc }</p>
			</div>
			<form className={classes.form} onSubmit={getFile} >
				<div className={classes.projectProposal}>
					<label htmlFor='proposalFile' style={{fontSize: 18}}>Proposal: &nbsp;</label>
					<input type='file' id='proposalFile' className={classes.projectProposalInput} required/>
				</div>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className={classes.submit}
				> Apply
				</Button>
			</form>
		</div>
	</Container>
	);
}

export default ProposalForm;
