/**
 * @flow
 * @relayHash c124695d43cd2d222a4b557598b1b62a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type roles = "Admin" | "Dev" | "Mentor" | "%future added value";
export type ProposalWhereInput = {|
  id?: ?string,
  user?: ?UserWhereInput,
  project?: ?ProjectWhereInput,
  isAccepted?: ?boolean,
  propUrl?: ?string,
|};
export type UserWhereInput = {|
  id?: ?string,
  firstName?: ?string,
  lastName?: ?string,
  role?: ?roles,
  email?: ?string,
  mobileNumber?: ?string,
  githubHandle?: ?string,
  password?: ?string,
  isVerified?: ?boolean,
  session?: ?string,
|};
export type ProjectWhereInput = {|
  id?: ?string,
  organization?: ?OrganizationWhereInput,
  projName?: ?string,
  projSlug?: ?string,
  projDesc?: ?string,
  githubUrl?: ?string,
|};
export type OrganizationWhereInput = {|
  id?: ?string,
  orgName?: ?string,
  orgSlug?: ?string,
  orgDesc?: ?string,
  githubUrl?: ?string,
|};
export type ViewProposalQueryVariables = {|
  cond?: ?ProposalWhereInput
|};
export type ViewProposalQueryResponse = {|
  +proposals: $ReadOnlyArray<?{|
    +id: string,
    +propUrl: string,
    +user: {|
      +id: string,
      +firstName: string,
      +lastName: string,
    |},
  |}>
|};
export type ViewProposalQuery = {|
  variables: ViewProposalQueryVariables,
  response: ViewProposalQueryResponse,
|};
*/


/*
query ViewProposalQuery(
  $cond: ProposalWhereInput
) {
  proposals(where: $cond) {
    id
    propUrl
    user {
      id
      firstName
      lastName
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "cond",
    "type": "ProposalWhereInput",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "proposals",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "cond"
      }
    ],
    "concreteType": "Proposal",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "propUrl",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ViewProposalQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ViewProposalQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ViewProposalQuery",
    "id": null,
    "text": "query ViewProposalQuery(\n  $cond: ProposalWhereInput\n) {\n  proposals(where: $cond) {\n    id\n    propUrl\n    user {\n      id\n      firstName\n      lastName\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4a19bfe2e650b083a9ab09f633970d8d';
module.exports = node;
