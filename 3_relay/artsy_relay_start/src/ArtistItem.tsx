import React, { Component } from "react"
import styled from "styled-components"

const fonts = {
  sans: "'ITC Avant Garde Gothic W04','AvantGardeGothicITCW01D 731075','AvantGardeGothicITCW01Dm','Helvetica','sans-serif'",
  serif: "'Adobe Garamond W08', 'adobe-garamond-pro', 'AGaramondPro-Regular', 'Times New Roman', 'Times', 'serif'"
}

const Wrapper = styled.div`
  padding: 10px;
  border-bottom: 1px solid;
  vertical-align: top;
`

const Link = styled.a`
  color: black;
`

const ImageDiv = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  overflow: hidden;
  background-image: url(${p => p.imageUrl});
  background-position: center;
  background-size: cover;
  margin-right: 10px;
`

const Meta = styled.div`
  display: inline-block;
  vertical-align: top;
`

const Name = styled.h3`
  display: block;
  font-size: 15px;
  line-height: 1.33;
  font-family: ${fonts.sans};
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  margin: 2px 0 5px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`

const Bio = styled.div`
  font-family: ${fonts.serif};
  font-size: 15px;
`

class ArtistItem extends Component {
  render() {
    const { name, href, image, bio } = this.props.artist

    return (
      <Wrapper>
        <Link href={href}>
          <ImageDiv imageUrl={image.url} />
          <Meta>
            <Name>{name}</Name>
            <Bio>{bio}</Bio>
          </Meta>
        </Link>
      </Wrapper>
    )
  }
}

export default ArtistItem
