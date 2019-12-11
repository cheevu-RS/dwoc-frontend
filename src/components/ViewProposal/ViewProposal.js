import React from 'react';
import { Redirect } from 'react-router-dom';
import SimpleTable from '../ProposalTable/ProposalTable';

// const environment = require('../../Environment').environment;

export default function ViewProposal(props) {
	let data = props.location.data;
	if (!data) {
		return <Redirect to="/" />;
	}
	console.log(props.role);
	if (props.role.toLowerCase() !== 'mentor') return <Redirect to="/" />;

	return (
		<div>
			<SimpleTable {...data} orgId={data.orgName}/>
		</div>
	);
}
