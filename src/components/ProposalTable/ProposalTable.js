import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
const environment = require("../../Environment").environment1;

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
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
  console.log(props);
  let rows = [];
  const classes = useStyles();
  const orgId = props.orgId;
  let renderTable = true;
  console.log("orgname=" + props.orgId);
  return (
    <div>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ProposalTableQuery($cond: ProposalWhereInput) {
            proposals(where: $cond) {
              id
              user {
                id
                firstName
                githubHandle
              }
              organization {
                id
              }
              isAccepted
              propUrl
            }
          }
        `}
        variables={{ cond: { organization: { id: orgId } } }}
        render={({ error, props }) => {
          if (error) {
            console.log(`${error} <= error Relay OrgCards`);
            return <div>Error!</div>;
          }
          /**/ console.log("PROP=" + JSON.stringify(props));
          if (!props) {
            //renderTable=false;
            return (
              <div>
                <p>Have not received any proposals!!!</p>
              </div>
            );
          }
          props.proposals.forEach(function(e) {
            let loc = e.propUrl;
            loc = loc.split("/");
            let propUrl = loc.pop();
            rows.push(
              createData(e.user.firstName, propUrl, e.user.githubHandle)
            );
          });

          return (
            renderTable && (
              <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="center">Proposal URL</TableCell>
                      <TableCell align="right">Github URL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={JSON.stringify(row)}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="center"><a href={`https://dwoc.io/proposals/${row.propsalURL}`}>{row.propsalURL}</a></TableCell>
                        <TableCell align="right">
                          <a href={`https://github.com/${row.githubUrl}`}>{row.githubUrl}</a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            )
          );
        }}
      />
    </div>
  );
}
