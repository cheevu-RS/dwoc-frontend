/**
 * @flow
 * @relayHash 2ddb016edd1407af5639c3d7f097a0f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TimelineQueryVariables = {||};
export type TimelineQueryResponse = {|
  +events: $ReadOnlyArray<?{|
    +id: string,
    +date: any,
    +eventDesc: string,
  |}>
|};
export type TimelineQuery = {|
  variables: TimelineQueryVariables,
  response: TimelineQueryResponse,
|};
*/


/*
query TimelineQuery {
  events {
    id
    date
    eventDesc
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "events",
    "storageKey": null,
    "args": null,
    "concreteType": "Event",
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
        "name": "date",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "eventDesc",
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
    "name": "TimelineQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TimelineQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TimelineQuery",
    "id": null,
    "text": "query TimelineQuery {\n  events {\n    id\n    date\n    eventDesc\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f37e3ac808f54a1d6ff38b0bad8cdab5';
module.exports = node;
