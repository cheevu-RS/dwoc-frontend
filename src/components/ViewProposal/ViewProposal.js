import React from 'react';
import { Redirect } from 'react-router-dom';
import SimpleTable from '../ProposalTable/ProposalTable';

// const environment = require('../../Environment').environment;

const jsondata = {
	proposals: [
		{
			id: 'ck1v3q3ye03x80847nifkt4gk',
			propUrl: 'something',
			user: {
				id: 'ck1v3q3x703w40847i1bp0shp',
				firstName: 'ahmed',
				lastName: 'shamsudeen',
				githubHandle: 'ahmed-10'
			}
		},
		{
			id: 'ck1v3q3yl03xe084792ob9cjp',
			propUrl: 'therila',
			user: {
				id: 'ck1v3q3xd03w80847tvqc9lmq',
				firstName: 'agu',
				lastName: 'shamsudeen',
				githubHandle: 'ahmed-20'
			}
		},
		{
			id: 'ck1v3q3z803yb0847u81e8c4e',
			propUrl: 'https://www.google.com',
			user: {
				id: 'ck1v3q3yv03xq0847zampekuf',
				firstName: 'Pranav',
				lastName: 'Shriram',
				githubHandle: 'abcdef@github'
			}
		},
		{
			id: 'ck1v3q3zt03z40847qz7qg2a6',
			propUrl: 'https://www.google.com',
			user: {
				id: 'ck1v3q3zf03yj0847a3p32dlb',
				firstName: 'Arun',
				lastName: 'Bala',
				githubHandle: 'ghi@github'
			}
		},
		{
			id: 'ck1v3q40s040g0847f9iqjbvg',
			propUrl: 'therila',
			user: {
				id: 'ck1v3q40003zc0847dz1ngpd8',
				firstName: 'Ram',
				lastName: 'topper',
				githubHandle: 'CPking'
			}
		},
		{
			id: 'ck1v3q40w040m0847g8v5kx5i',
			propUrl: 'therila',
			user: {
				id: 'ck1v3q40203zg0847b2yrjpjq',
				firstName: 'Chethan',
				lastName: 'Reddy',
				githubHandle: 'Chethan2k1'
			}
		}
	]
};
// console.log('hello');
const prop = JSON.parse(JSON.stringify(jsondata));
const columns = [
	{
		Header: 'Name',
		accessor: (d) => d.user.firstName
	},
	{
		Header: 'Proposal',
		accessor: 'propUrl'
	},
	{
		Header: 'Github URL',
		accessor: (d) => d.user.githubHandle
	}
];

export default function ViewProposal(props) {
	let data = props.location.data;
	if (!data) {
		return <Redirect to="/" />;
	}
	console.log(props.role);
	if (props.role.toLowerCase() !== 'mentor') return <Redirect to="/" />;

	let projSlug;
	if (data) projSlug = data.projSlug;

	return (
		<div>
			<SimpleTable {...props} projSlug={projSlug} orgId={data.orgName}/>
		</div>
	);
}
