/**
 * @flow
 * @relayHash 6b973052680c1bdf42b328cdc80aaa88
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProposalCreateInput = {|
  id?: ?string,
  isAccepted?: ?boolean,
  propUrl: string,
  user: UserCreateOneInput,
  project: ProjectCreateOneInput,
|};
export type UserCreateOneInput = {|
  connect?: ?UserWhereUniqueInput
|};
export type UserWhereUniqueInput = {|
  id?: ?string,
  email?: ?string,
  mobileNumber?: ?string,
  githubHandle?: ?string,
|};
export type ProjectCreateOneInput = {|
  create?: ?ProjectCreateInput,
  connect?: ?ProjectWhereUniqueInput,
|};
export type ProjectCreateInput = {|
  id?: ?string,
  organization: OrganizationCreateOneInput,
  projName: string,
  projSlug: string,
  projDesc?: ?string,
  githubUrl?: ?string,
  projMinDesc?: ?string,
|};
export type OrganizationCreateOneInput = {|
  create?: ?OrganizationCreateInput,
  connect?: ?OrganizationWhereUniqueInput,
|};
export type OrganizationCreateInput = {|
  id?: ?string,
  orgName: string,
  orgSlug: string,
  orgDesc?: ?string,
  githubUrl?: ?string,
|};
export type OrganizationWhereUniqueInput = {|
  id?: ?string,
  orgSlug?: ?string,
  githubUrl?: ?string,
|};
export type ProjectWhereUniqueInput = {|
  id?: ?string,
  projSlug?: ?string,
  organization?: ?OrganizationWhereUniqueInput,
|};
export type MutationRendererMutationVariables = {|
  proposal: ProposalCreateInput
|};
export type MutationRendererMutationResponse = {|
  +createProposal: {|
    +id: string,
    +propUrl: string,
  |}
|};
export type MutationRendererMutation = {|
  variables: MutationRendererMutationVariables,
  response: MutationRendererMutationResponse,
|};
*/


/*
mutation MutationRendererMutation(
  $proposal: ProposalCreateInput!
) {
  createProposal(data: $proposal) {
    id
    propUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "proposal",
    "type": "ProposalCreateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createProposal",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "proposal"
      }
    ],
    "concreteType": "Proposal",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "propUrl",
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
    "name": "MutationRendererMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MutationRendererMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "MutationRendererMutation",
    "id": null,
    "text": "mutation MutationRendererMutation(\n  $proposal: ProposalCreateInput!\n) {\n  createProposal(data: $proposal) {\n    id\n    propUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1c1eb8f5d348b0c7d34cefbbc827e6c7';
module.exports = node;
