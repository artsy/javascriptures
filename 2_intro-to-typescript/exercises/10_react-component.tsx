import { Component } from "react"

interface Props {
  // ... ?
}

const ArtistsData = [
  {
    id: "banksy",
    href: "https://www.artsy.net/artist/banksy",
    name: "Banksy",
    image: { url: "https://d32dm0rphc51dk.cloudfront.net/hoFocUdpgF4mazPIgekpZA/tall.jpg" },
    bio: "Banksy creates street art",
  }
]

class ArtistItem extends Component<Props> {
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
    return ArtistsData.map(artist => (
      <ArtistItem
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
