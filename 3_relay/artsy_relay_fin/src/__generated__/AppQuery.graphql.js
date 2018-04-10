/**
 * @flow
 * @relayHash ec4e05581425e75ced9187c87255de1c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { ArtistItem_artist$ref } from './ArtistItem_artist.graphql';
export type AppQueryVariables = {| |};
export type AppQueryResponse = {|
  +popular_artists: ?{|
    +artists: ?$ReadOnlyArray<?{|
      +$fragmentRefs: ArtistItem_artist$ref,
    |}>,
  |},
|};
*/


/*
query AppQuery {
  popular_artists {
    artists {
      ...ArtistItem_artist
      __id
    }
  }
}

fragment ArtistItem_artist on Artist {
  id
  href
  bio
  image {
    url
  }
  __id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  popular_artists {\n    artists {\n      ...ArtistItem_artist\n      __id\n    }\n  }\n}\n\nfragment ArtistItem_artist on Artist {\n  id\n  href\n  bio\n  image {\n    url\n  }\n  __id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "popular_artists",
        "storageKey": null,
        "args": null,
        "concreteType": "PopularArtists",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ArtistItem_artist",
                "args": null
              },
              v0
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "popular_artists",
        "storageKey": null,
        "args": null,
        "concreteType": "PopularArtists",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
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
                "name": "href",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "bio",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "image",
                "storageKey": null,
                "args": null,
                "concreteType": "Image",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '84c1535481057e6b11285b8c1e68ae9c';
module.exports = node;
