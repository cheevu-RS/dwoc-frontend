/**
 * @flow
 * @relayHash 0fbd77a9feba23548bc98f65ae74e251
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
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
export type ProjCardsQueryVariables = {|
  orgid?: ?ProjectWhereInput
|};
export type ProjCardsQueryResponse = {|
  +projects: $ReadOnlyArray<?{|
    +id: string,
    +projName: string,
    +projSlug: string,
    +projDesc: ?string,
    +githubUrl: ?string,
    +organization: {|
      +id: string
    |},
  |}>
|};
export type ProjCardsQuery = {|
  variables: ProjCardsQueryVariables,
  response: ProjCardsQueryResponse,
|};
*/


/*
query ProjCardsQuery(
  $orgid: ProjectWhereInput
) {
  projects(where: $orgid) {
    id
    projName
    projSlug
    projDesc
    githubUrl
    organization {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "orgid",
    "type": "ProjectWhereInput",
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
    "name": "projects",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "orgid"
      }
    ],
    "concreteType": "Project",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "projName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "projSlug",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "projDesc",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "githubUrl",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "organization",
        "storageKey": null,
        "args": null,
        "concreteType": "Organization",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProjCardsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProjCardsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProjCardsQuery",
    "id": null,
    "text": "query ProjCardsQuery(\n  $orgid: ProjectWhereInput\n) {\n  projects(where: $orgid) {\n    id\n    projName\n    projSlug\n    projDesc\n    githubUrl\n    organization {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '60f5b3cfaa805b713895c9240c076376';
module.exports = node;
