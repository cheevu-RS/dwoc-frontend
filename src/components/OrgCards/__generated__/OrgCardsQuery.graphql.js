/**
 * @flow
 * @relayHash 58fc38943933ceb60523253716cee766
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrgCardsQueryVariables = {||};
export type OrgCardsQueryResponse = {|
  +organizations: $ReadOnlyArray<?{|
    +orgName: string,
    +id: string,
    +orgDesc: ?string,
    +githubUrl: ?string,
  |}>
|};
export type OrgCardsQuery = {|
  variables: OrgCardsQueryVariables,
  response: OrgCardsQueryResponse,
|};
*/


/*
query OrgCardsQuery {
  organizations {
    orgName
    id
    orgDesc
    githubUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "organizations",
    "storageKey": null,
    "args": null,
    "concreteType": "Organization",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "orgName",
        "args": null,
        "storageKey": null
      },
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
        "name": "orgDesc",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "githubUrl",
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
    "name": "OrgCardsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "OrgCardsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "OrgCardsQuery",
    "id": null,
    "text": "query OrgCardsQuery {\n  organizations {\n    orgName\n    id\n    orgDesc\n    githubUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c716ce179ad030a86fbcff97afe883fd';
module.exports = node;
