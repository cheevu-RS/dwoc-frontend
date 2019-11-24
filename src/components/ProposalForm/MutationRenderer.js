import React from 'react';
import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
const Cookie = require("js-cookie");

const environment = require('../../Environment').environment1;

const MutationRenderer = props => {

    const mutation = graphql`
        mutation MutationRendererMutation($proposal: ProposalCreateInput!) {
            createProposal(data: $proposal) {
                id
                propUrl
            }
        } 
    `;
    let proposal = {
        propUrl: props.propUrl,
        user: {
            connect: { id: props.userID }
        },
        organization: {
            connect: { id: props.orgID }
        }
    }
    // console.log(proposal);
    commitMutation(environment, {
        mutation,
        variables: { proposal },
        onCompleted: (response, errors) => {
            console.log("Mutation done")
            
        },
        onError: err => {
            console.error(err)
            // console.log(`${err} <= err in getFile`);
        }
    });

    return (
        <></>
    )
};

export default MutationRenderer;