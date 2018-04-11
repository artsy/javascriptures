/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type PopularArtists_popular_artists = {
    readonly artists: ReadonlyArray<({
        readonly id: string;
    }) | null> | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "PopularArtists_popular_artists",
  "type": "PopularArtists",
  "metadata": null,
  "argumentDefinitions": [],
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
          "kind": "FragmentSpread",
          "name": "ArtistItem_artist",
          "args": null
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
};
(node as any).hash = '374b6922fb6ea685d8a661847b35115d';
export default node;
