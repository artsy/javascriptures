import React, { Component } from 'react'
import ArtistItem from './ArtistItem'
import './PopularArtists.css'

import { ArtistItemData } from "./ArtistItem"

interface Props {
  popular_artists: {
    artists: (ArtistItemData & { id: string })[]
  }
}

class PopularArtists extends Component<Props> {
  render() {
    return (
      <div>
        <h3>Popular Artists</h3>
        <div className="artist-list">
          {this.props.popular_artists.artists.map(artist => <ArtistItem key={artist.id} artist={artist} /> )}
        </div>
      </div>
    )
  }
}

export default PopularArtists
