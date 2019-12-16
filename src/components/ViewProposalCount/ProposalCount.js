import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
const environment = require("../../Environment").environment1;


export default function SimpleTable(props) {
    console.log(props);
    const orgId = props.id;
    const orgName = props.orgName;
    return (
        <div>
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query ProposalCountQuery($cond: ProposalWhereInput) {
                        proposals(where: $cond) {
                        id
                        }
                    }
                    `}
                variables={{ cond: { organization: { id: orgId } } }}
                render={({ error, props }) => {
                    if (error) {
                        console.log(`${error} <= error Relay ProposalCount`);
                        return <div>Error!</div>;
                    }
                    if (!props) {
                        return (
                            <div>
                                <p>No props</p>
                            </div>
                        );
                    }
                    return (<TableRow key={orgId}>
                        <TableCell component="th" scope="row" align="left">
                            {orgName}
                        </TableCell>
                        <TableCell align="right">{props.proposals.length}</TableCell>
                    </TableRow>)
                }}
            />
        </div>
    );
}