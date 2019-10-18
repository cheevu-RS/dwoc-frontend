import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
//import { css } from '@emotion/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const environment= require( "../../../Environment.js").environment1;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));


//form data


//-error--



export default function TextFields(props) {
  console.log("OrgName:"+props.orgName);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    project: '',
    desc: '',
    url: '',
  });

  const handleChange = name => event => {
    // console.log('Hi'+[name]+values.name);
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = event => {
    console.log(values.name + values.project + values.desc + values.url);
    formAddProject(environment, values.name, values.project, values.desc, values.url);
    //window.location.reload();
   // (props.onClose)();;
  };
  //form data
  function formAddProject(environment, f_projname, f_slug, f_desc, f_url) {
    const mutation = graphql`
    mutation FormMutation($input: ProjectCreateInput!) {
      createProject(data: $input) {
        organization {
          orgSlug
        }
        projName
      }
    }
  `;
  
    const variables = {
      input: {
        projName: f_projname,
        projSlug: f_slug,
        projDesc: f_desc,
        githubUrl: f_url,
        organization: {
          connect: {
            orgSlug: props.orgName,
          }
        }
      },
    };
  
    commitMutation(
      environment,
      {
        mutation,
        variables,
        onCompleted: (response, errors) => {
          console.log('Response received from server.')
          //props.onClose();
          window.location.reload();
        },
        onError: err => {
          console.error(err)
          alert("Error!");
        },
      },
    );
    //alert("Success!");
  }

  return (
    <form className={classes.container} autoComplete="off">
      <TextField
        id="standard-name" label="Project Name"
        className={classes.textField} value={values.name}
        onChange={handleChange('name')} margin="normal"
        fullWidth
      />
      <br />
      <TextField
        id="standard-project" label="Project Slug"
        className={classes.textField} value={values.project}
        onChange={handleChange('project')} margin="normal"
        fullWidth
      />
      <br />
      <TextField
        id="standard-desc" label="Project Description"
        className={classes.textField} value={values.desc}
        onChange={handleChange('desc')} margin="normal"
        fullWidth
      />
      <br />
      <TextField
        id="standard-url" label="Github Url"
        className={classes.textField} value={values.url}
        onChange={handleChange('url')} margin="normal"
        fullWidth
      />
      <br />
      <Button color="primary" className={classes.button} onClick={handleSubmit}>
        Submit
      </Button>
      <Button color="secondary" className={classes.button} onClick={props.onClose}>
        CLose
      </Button>
    </form>
  );
}