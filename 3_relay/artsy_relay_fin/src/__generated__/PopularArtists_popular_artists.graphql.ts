/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type PopularArtists_popular_artists = {
    readonly artists: ReadonlyArray<({
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
(node as any).hash = '9a31fd8ac8dd6ecddbec0772b7848517';
export default node;
