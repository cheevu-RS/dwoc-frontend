import React from 'react';

// Subcomponent import
import ProposalCount from "./ProposalCount"
//Spinner
import RingLoader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

// Style imports
import WebFont from 'webfontloader';
import { header2, header3, orgs, gridContainer } from '../../DwocStyles';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// Relay
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
const environment = require('../../Environment').environment;

WebFont.load({
    google: {
        families: [header2.fontFamily, header3.fontFamily]
    }
});

const useStyles = makeStyles(theme => ({
    gridContainer: gridContainer,
    header2: header2,
    header3: header3,
    orgs: orgs,
    table: {
        minWidth: 650,
    },
}));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function OrgProposalCount(prop) {
    const classes = useStyles();
    const role = prop.role;
    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
        query OrgProposalCountQuery {
          organizations {
            id
            orgName
          }
        }
      `}
            variables={{}}
            render={({ error, props }) => {
                if (error) {
                    console.log(`${error} <= error Relay GetOrgs`);
                    return <div>Error!</div>;
                }
                if (!props) {
                    return (
                        <div>
                            <RingLoader css={override} color={'#5CDB95'} />
                        </div>
                    );
                }
                return (<>
                    <h2 className={classes.header2}>Proposals Count</h2>
                    <Paper className={classes.root}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="center">Number of Proposals</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <>
                                    {
                                        props.organizations.map(org => (
                                            <ProposalCount {...org} key={org.id} />
                                        ))
                                    }
                                </>
                            </TableBody>
                        </Table>
                    </Paper>
                </>);
            }}
        />
    );
}
