import React, { Component } from 'react';
import './App.css';
import ArtistsData from './artists'

class ArtistItem extends Component {
  render() {
    const { name, href, image, bio } = this.props

    return (
      <div className="artist-item">
        <a href={href}>
          <div className="image" style={{backgroundImage: `url(${image.url})`}} />
          <div className="meta">
            <h3>{name}</h3>
            <div>{bio}</div>
          </div>
        </a>
      </div>
    )
  }
}

class App extends Component {
  renderArtists() {
    const artists = ArtistsData

    return artists
    .map(artist => (
      <ArtistItem
        key={artist.id}
        name={artist.name} 
        image={artist.image}
        bio={artist.bio}
      />
    ))
  }

  render() {
    return (
      <div className="App">
        {this.renderArtists()}
      </div>
    )
  }
}

export default App;
