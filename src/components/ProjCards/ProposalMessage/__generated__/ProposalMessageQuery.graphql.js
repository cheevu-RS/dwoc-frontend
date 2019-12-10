/**
 * @flow
 * @relayHash bf1ce25160d6a0c07f853c613ab63ab4
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
export type ProposalMessageQueryVariables = {|
  userId?: ?ProposalWhereInput
|};
export type ProposalMessageQueryResponse = {|
  +proposals: $ReadOnlyArray<?{|
    +id: string
  |}>
|};
export type ProposalMessageQuery = {|
  variables: ProposalMessageQueryVariables,
  response: ProposalMessageQueryResponse,
|};
*/


/*
query ProposalMessageQuery(
  $userId: ProposalWhereInput
) {
  proposals(where: $userId) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ProposalWhereInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "proposals",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "userId"
      }
    ],
    "concreteType": "Proposal",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProposalMessageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProposalMessageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProposalMessageQuery",
    "id": null,
    "text": "query ProposalMessageQuery(\n  $userId: ProposalWhereInput\n) {\n  proposals(where: $userId) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9d25f7d2b42aba59c7863e67f85e637a';
module.exports = node;
