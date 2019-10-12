import React from 'react';
import OrgCard from '../../components/OrgCards/OrgCard/OrgCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { makeStyles } from '@material-ui/core/styles';

import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../Environment';

// const useStyles = makeStyles(theme => ({
//   container: {
//     minWidth: '93%'
//   }  
// }));

export default function OrgCards() {
  // const classes = useStyles(); 

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query OrgCardsQuery {
          organizations {
            orgName
            id
            orgDesc
            githubUrl
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          console.log(`${error} <= error Relay OrgCards`);
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        let n = props.organizations.length;
        const allOrgs = props.organizations;
        // console.log(n);
        // console.log(props.organizations);
        let structuredOrg = [];

        for(let i = 0; i<n; i+=4){
          let row = [];
          for(let j = i; j<i+4; j++){
            if(j>=n) break;
            row.push(allOrgs[j]);
          }
          while(row.length < 4) row.push([]);
          structuredOrg.push(row);
        }

        // console.log(structuredOrg);
        let num = 1;

        console.log(`${JSON.stringify(props)} <= props in OrgCards  `);
        return (
          <div style={{paddingLeft: "2%"}}>
            {structuredOrg.map(org => (<Row key={num++}>{org.map(o => (o.id?<Col key={o.id}><OrgCard {...o}/></Col>:<Col key={num++}></Col>))} </Row>))}
          </div>
        );
      }}
    />
  );
}
