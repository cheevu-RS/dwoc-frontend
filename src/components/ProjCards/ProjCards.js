
import React, { useEffect } from 'react';
import ProjCard from './ProjMinCard/ProjMinCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Material UI
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RingLoader from 'react-spinners/RingLoader';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import WebFont from 'webfontloader';
import { css } from '@emotion/core';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from './AddProjectForm/Form';
import { header1, gridContainer } from '../../DwocStyles';


const environment = require('../../Environment').environment;

WebFont.load({
  google: {
    families: [header1.fontFamily]
  }
});

const useStyles = makeStyles(theme => ({
  container: {
    minWidth: '93%',
    paddingLeft: '2%'
  },
  header1: header1,
  gridContainer: gridContainer,
  addProjBtn: {
    color: 'white',
    borderRadius: `10px`,
    transition: `0.2s`,
    '&:before, &:after': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: `100%`,
      transition: `0.4s`,
      background: 'black'
    },
    '&:before': {
      borderRadius: `10px 0 0 10px`,
    },
    '&:after': {
      borderRadius: `0 10px 10px 0`,
      left: 'auto',
      right: 0
    },
    '&:hover': {
      '&:after, &:before': {
        width: `50%`,
      },
      '& .textClass': {
        color: `#5CDB95`,
        zIndex: 100,
      }
    },
  }
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Projects(props) {
  const classes = useStyles();
  const orgName = props.match.params.orgName;
  const defaultTools = ['C++', 'Python'];
  const isLogged = props.isLogged;
  const orgID = props.match.params.id;
  //const role= props.match.params.role;
  const role="mentor";
  console.log(props)
  const orgSlug=props.location.state.orgSlug;
  console.log("SLUG:"+orgSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.container}>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ProjCardsQuery($orgid: ProjectWhereInput) {
            projects(where: $orgid) {
              id
              projName
              projSlug
              projMinDesc
              projDesc
              githubUrl
              organization {
                id
              }
            }
          }
        `}
        variables={{ orgid: { organization: { id: orgID } } }}
        render={({ error, props }) => {
          if (error) {
            console.log(`${error} <= error Relay ProjCards`);
            return <div>Error!</div>;
          }
          if (!props) {
            return (
              <div>
                <br />
                <h2 className={classes.header1}> {orgName}</h2>
                <div style={{ paddingTop: '20%' }}>
                  <RingLoader css={override} color={'#5CDB95'} />
                </div>
              </div>
            );
          }
          // console.log(`${JSON.stringify(props)} <= props in ProjCards  `);

          let num = 1;
          let extra;
          console.log("SLUG:"+orgSlug);
          if (role.toLowerCase()==="mentor")
           extra = (<div>
                      <Button variant="outlined" onClick={handleClickOpen} className={classes.addProjBtn}>
                       <span className='textClass'> Add Project </span>
                      </Button>
                      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">New Project</DialogTitle>
                        <Form onClose={handleClose} orgName={orgSlug}/>
                      </Dialog>
                    </div>);
          return (
            <div>
              
              <br />
              <h2 className={classes.header1}>{orgName}</h2>
              {extra}
              <Grid container className={classes.gridContainer} spacing={3}>
                {props.projects.map(project => (
                  <ProjCard
                    tools={defaultTools}
                    projName={project.projName}
                    orgName={orgName}
                    projDesc={project.projDesc}
                    projMinDesc={project.projMinDesc}
                    {...project}
                    isLogged={isLogged}
                    key={project.id}
                  />
                ))}
              </Grid>
            </div>
          );
        }}
      />
    </div>
  );
}
