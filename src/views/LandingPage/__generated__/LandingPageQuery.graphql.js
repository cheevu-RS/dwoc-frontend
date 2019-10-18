/**
 * @flow
 * @relayHash f20ba5e5956ecb750a70111b678bac46
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type roles = "Admin" | "Dev" | "Mentor" | "%future added value";
export type LandingPageQueryVariables = {||};
export type LandingPageQueryResponse = {|
  +users: $ReadOnlyArray<?{|
    +role: ?roles
  |}>
|};
export type LandingPageQuery = {|
  variables: LandingPageQueryVariables,
  response: LandingPageQueryResponse,
|};
*/


/*
query LandingPageQuery {
  users {
    role
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LandingPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LandingPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
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
    "name": "LandingPageQuery",
    "id": null,
    "text": "query LandingPageQuery {\n  users {\n    role\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e2db1b34a59f45be886e4595dcd279eb';
module.exports = node;
