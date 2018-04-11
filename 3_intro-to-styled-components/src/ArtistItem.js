import React, { Component } from "react"

export default class ArtistItem extends Component {
  render() {
    const { name, href, image, bio } = this.props

    return (
      <div className="artist-item">
        <a href={href}>
          <div
            className="image"
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <div className="meta">
            <h3>{name}</h3>
            <div>{bio}</div>
          </div>
        </a>
      </div>
    )
  }
}
