/**
 * @flow
 * @relayHash 001735ad5a30603cf70848723eb806cd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProposalFormMutationVariables = {|
  file: any
|};
export type ProposalFormMutationResponse = {|
  +uploadFile: {|
    +fileName: string,
    +filePath: string,
  |}
|};
export type ProposalFormMutation = {|
  variables: ProposalFormMutationVariables,
  response: ProposalFormMutationResponse,
|};
*/


/*
mutation ProposalFormMutation(
  $file: Upload!
) {
  uploadFile(file: $file) {
    fileName
    filePath
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "file",
    "type": "Upload!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "uploadFile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "file",
        "variableName": "file"
      }
    ],
    "concreteType": "File",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "fileName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "filePath",
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
    "name": "ProposalFormMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProposalFormMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProposalFormMutation",
    "id": null,
    "text": "mutation ProposalFormMutation(\n  $file: Upload!\n) {\n  uploadFile(file: $file) {\n    fileName\n    filePath\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ad6f7f5222e41b13805c2cc5169850ae';
module.exports = node;
