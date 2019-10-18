/**
 * @flow
 * @relayHash 9b23348c24dde4e511bb53e9fa9d84fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
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
export type FormMutationVariables = {|
  input: ProjectCreateInput
|};
export type FormMutationResponse = {|
  +createProject: {|
    +organization: {|
      +orgSlug: string
    |},
    +projName: string,
  |}
|};
export type FormMutation = {|
  variables: FormMutationVariables,
  response: FormMutationResponse,
|};
*/


/*
mutation FormMutation(
  $input: ProjectCreateInput!
) {
  createProject(data: $input) {
    organization {
      orgSlug
      id
    }
    projName
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ProjectCreateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "data",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "orgSlug",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "projName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FormMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProject",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FormMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createProject",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "organization",
            "storageKey": null,
            "args": null,
            "concreteType": "Organization",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/)
            ]
          },
          (v3/*: any*/),
          (v4/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "FormMutation",
    "id": null,
    "text": "mutation FormMutation(\n  $input: ProjectCreateInput!\n) {\n  createProject(data: $input) {\n    organization {\n      orgSlug\n      id\n    }\n    projName\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8bc01627c0c06b6e9886883b9d688e35';
module.exports = node;
