/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AppQueryVariables = {
};
export type AppQueryResponse = {
    readonly popular_artists: ({
    }) | null;
};



/*
query AppQuery {
  popular_artists {
    ...PopularArtists_popular_artists
  }
}

fragment PopularArtists_popular_artists on PopularArtists {
  artists {
    id
    ...ArtistItem_artist
    __id
  }
}

fragment ArtistItem_artist on Artist {
  id
  href
  bio
  name
  image {
    url
  }
  __id
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  popular_artists {\n    ...PopularArtists_popular_artists\n  }\n}\n\nfragment PopularArtists_popular_artists on PopularArtists {\n  artists {\n    id\n    ...ArtistItem_artist\n    __id\n  }\n}\n\nfragment ArtistItem_artist on Artist {\n  id\n  href\n  bio\n  name\n  image {\n    url\n  }\n  __id\n}\n",
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
            "kind": "FragmentSpread",
            "name": "PopularArtists_popular_artists",
            "args": null
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
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
(node as any).hash = '6032c96118acb90ca9f9d3a582f4cb3c';
export default node;
