/**
 * @flow
 * @relayHash e1e1d053e76031d9847b725804eb34dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectWhereUniqueInput = {|
  id?: ?string,
  projSlug?: ?string,
  organization?: ?OrganizationWhereUniqueInput,
|};
export type OrganizationWhereUniqueInput = {|
  id?: ?string,
  orgSlug?: ?string,
  githubUrl?: ?string,
|};
export type ProjCardsQueryVariables = {|
  orgid?: ?ProjectWhereUniqueInput
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
  $orgid: ProjectWhereUniqueInput
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
    "type": "ProjectWhereUniqueInput",
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
    "text": "query ProjCardsQuery(\n  $orgid: ProjectWhereUniqueInput\n) {\n  projects(where: $orgid) {\n    id\n    projName\n    projSlug\n    projDesc\n    githubUrl\n    organization {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cbb88e0dfc8dd30a143bd647504c8fe2';
module.exports = node;
