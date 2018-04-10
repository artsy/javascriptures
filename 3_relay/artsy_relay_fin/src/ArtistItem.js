import React, { Component } from "react"
import { createFragmentContainer, graphql } from "react-relay"

class ArtistItem extends Component {
  render() {
    const { name, href, image, bio } = this.props.artist

    return (
      <div className="artist-item">
        <a href={href}>
          <div className="image" style={{ backgroundImage: `url(${image && image.url})` }} />
          <div className="meta">
            <h3>{name}</h3>
            <div>{bio}</div>
          </div>
        </a>
      </div>
    )
  }
}

export default createFragmentContainer(
  ArtistItem,
  graphql`
    fragment ArtistItem_artist on Artist {
      id
      href
      bio
      image {
        url
      }
    }
  `
)
