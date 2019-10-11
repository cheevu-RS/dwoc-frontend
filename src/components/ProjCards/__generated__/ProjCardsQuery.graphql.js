/**
 * @flow
 * @relayHash 22080dde3a4da6a764b944f3529933c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjCardsQueryVariables = {||};
export type ProjCardsQueryResponse = {|
  +projects: $ReadOnlyArray<?{|
    +id: string,
    +projSlug: string,
  |}>
|};
export type ProjCardsQuery = {|
  variables: ProjCardsQueryVariables,
  response: ProjCardsQueryResponse,
|};
*/


/*
query ProjCardsQuery {
  projects {
    id
    projSlug
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "projects",
    "storageKey": null,
    "args": null,
    "concreteType": "Project",
    "plural": true,
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
        "name": "projSlug",
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
    "name": "ProjCardsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProjCardsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProjCardsQuery",
    "id": null,
    "text": "query ProjCardsQuery {\n  projects {\n    id\n    projSlug\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd817105c8d459995fbe3fce76b9c40ec';
module.exports = node;
