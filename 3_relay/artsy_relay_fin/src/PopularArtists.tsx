import { createFragmentContainer, graphql } from "react-relay"
import React, { Component } from 'react';
import './PopularArtists.css';

import ArtistItem from "./ArtistItem"

import { PopularArtists_popular_artists } from "./__generated__/PopularArtists_popular_artists.graphql"

interface Props {
  popular_artists: PopularArtists_popular_artists
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

class PopularArtists extends Component<Props> {
  render() {
    const artists = (this.props.popular_artists.artists || []).filter(notEmpty)
    return (
      <div>
        <h3>Popular Artists</h3>
        <div className="artist-list">
          {artists.map(artist => <ArtistItem key={artist.id} artist={artist as any} /> )}
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(
  PopularArtists,
  graphql`
    fragment PopularArtists_popular_artists on PopularArtists {
      artists {
        id
        ...ArtistItem_artist
      }
    }
  `,
);
