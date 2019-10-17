import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
//import graphql from 'babel-plugin-relay';
//import graphql from 'react-relay';

//let environment = require('./Environment');
import environment from "./Environment";

console.log(`${JSON.stringify(environment)} <= environment`);
function Projects() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ProjectsQuery {
          organizations {
            orgName
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        console.log(`${JSON.stringify(props)} <= props`);
        return <div>User ID: props.viewer.id</div>;
      }}
    />
  );
}

export default Projects;
