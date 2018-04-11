import React, { Component } from 'react'
import ArtistItem from './ArtistItem'
import './PopularArtists.css'

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

export default PopularArtists
