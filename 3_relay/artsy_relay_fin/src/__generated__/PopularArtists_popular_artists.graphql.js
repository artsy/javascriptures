/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { ArtistItem_artist$ref } from './ArtistItem_artist.graphql';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type PopularArtists_popular_artists$ref: FragmentReference;
export type PopularArtists_popular_artists = {|
  +artists: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ArtistItem_artist$ref,
  |}>,
  +$refType: PopularArtists_popular_artists$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
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
(node/*: any*/).hash = '9a31fd8ac8dd6ecddbec0772b7848517';
module.exports = node;
