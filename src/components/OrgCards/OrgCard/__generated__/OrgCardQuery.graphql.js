/**
 * @flow
 * @relayHash 8549379c0df91c41fc0d15fe6665d039
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type roles = "Admin" | "Dev" | "Mentor" | "%future added value";
export type MentorWhereInput = {|
  id?: ?string,
  user?: ?UserWhereInput,
  organization?: ?OrganizationWhereInput,
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
  profileImage?: ?string,
|};
export type OrganizationWhereInput = {|
  id?: ?string,
  orgName?: ?string,
  orgSlug?: ?string,
  orgDesc?: ?string,
  orgMaxDesc?: ?string,
  githubUrl?: ?string,
  communicationChannel?: ?string,
|};
export type OrgCardQueryVariables = {|
  orgid?: ?MentorWhereInput
|};
export type OrgCardQueryResponse = {|
  +mentors: $ReadOnlyArray<?{|
    +id: string,
    +user: {|
      +firstName: string,
      +lastName: string,
      +mobileNumber: ?string,
      +email: ?string,
      +githubHandle: string,
    |},
  |}>
|};
export type OrgCardQuery = {|
  variables: OrgCardQueryVariables,
  response: OrgCardQueryResponse,
|};
*/


/*
query OrgCardQuery(
  $orgid: MentorWhereInput
) {
  mentors(where: $orgid) {
    id
    user {
      firstName
      lastName
      mobileNumber
      email
      githubHandle
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
    "type": "MentorWhereInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "orgid"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mobileNumber",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "githubHandle",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OrgCardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "mentors",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Mentor",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrgCardQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "mentors",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Mentor",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OrgCardQuery",
    "id": null,
    "text": "query OrgCardQuery(\n  $orgid: MentorWhereInput\n) {\n  mentors(where: $orgid) {\n    id\n    user {\n      firstName\n      lastName\n      mobileNumber\n      email\n      githubHandle\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4e3db44392cff0dd98e6c34b9d2b8431';
module.exports = node;
