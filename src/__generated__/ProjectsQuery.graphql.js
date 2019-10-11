/**
 * @flow
 * @relayHash 317a8829a61ac51eb82cf5cb2515535d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectsQueryVariables = {||};
export type ProjectsQueryResponse = {|
  +organizations: $ReadOnlyArray<?{|
    +orgName: string
  |}>
|};
export type ProjectsQuery = {|
  variables: ProjectsQueryVariables,
  response: ProjectsQueryResponse,
|};
*/


/*
query ProjectsQuery {
  organizations {
    orgName
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "orgName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProjectsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organizations",
        "storageKey": null,
        "args": null,
        "concreteType": "Organization",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProjectsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organizations",
        "storageKey": null,
        "args": null,
        "concreteType": "Organization",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectsQuery",
    "id": null,
    "text": "query ProjectsQuery {\n  organizations {\n    orgName\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c5fe85f83885afe9ab1fb7b76a7af7e';
module.exports = node;
