import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
const environment = require('../../Environment').environment1;

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: 50
  },
  table: {
    minWidth: 650
  }
});

function createData(name, propsalURL, githubUrl) {
  return { name, propsalURL, githubUrl };
}

const rows = [];

export default function SimpleTable(props) {
  const classes = useStyles();
  const projSlug = props.projSlug;

  return (
    <div>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ProposalTableQuery($cond: ProposalWhereInput) {
            proposals(where: $cond) {
              id
              propUrl
              user {
                id
                firstName
                lastName
                githubHandle
              }
            }
          }
        `}
        variables={{ cond: { project: { projSlug: projSlug } } }}
        render={({ error, prop }) => {
          if (error) {
            console.log(`${error} <= error Relay OrgCards`);
            return <div>Error!</div>;
          }
          if (!prop) {
            return (
              <div>
                <p>Table empty!!!</p>
              </div>
            );
          }
          prop.proposals.forEach(function(e) {
            rows.push(createData(e.user.firstName, e.propUrl, e.githubHandle));
          });

          return <div />;
        }}
      />

      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Proposal URL</TableCell>
              <TableCell align="right">Github URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.propsalURL}</TableCell>
                <TableCell align="right">{row.githubUrl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
