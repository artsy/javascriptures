import { createFragmentContainer, graphql } from "react-relay"
import React, { Component } from 'react';
import './PopularArtists.css';

import ArtistItem from "./ArtistItem"

class PopularArtists extends Component {
  render() {
    return (
      <div>
        <h3>Popular Artists</h3>
        <div className="artist-list">
          {this.props.popular_artists.artists.map(a => <ArtistItem artist={a} /> )}
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
        ...ArtistItem_artist
      }
    }
  `,
);
