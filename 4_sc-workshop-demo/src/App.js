import React, { Component } from "react"
import "./App.css"
import ArtistsData from "./artists"
import ArtistItem from "./ArtistItem"

export default class App extends Component {
  renderArtists() {
    const artists = ArtistsData

    return artists.map(artist => (
      <ArtistItem
        key={artist.id}
        name={artist.name}
        image={artist.image}
        bio={artist.bio}
      />
    ))
  }

  render() {
    return <div className="App">{this.renderArtists()}</div>
  }
}
