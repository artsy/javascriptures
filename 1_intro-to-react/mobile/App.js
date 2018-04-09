import React, { Component } from 'react'
import { FlatList, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import ArtistsData from './artists'

class ArtistItem extends Component {
  render() {
    const { name, href, image, bio } = this.props

    return (
        <TouchableHighlight>
          <View style={styles.artistItem}>
            <Image source={{uri: image.url}} style={{width: 100, height: 100}}/>
            <Text>{name}</Text>
            <Text>{bio}</Text>
          </View>
        </TouchableHighlight>
    )
  }
}

export default class App extends React.Component {
  renderArtists() {
    const artists = ArtistsData

    return artists
      .map(artist => (
        <ArtistItem 
          name={artist.name} 
          image={artist.image}
          bio={artist.bio} />
      ))
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={ArtistsData}
          renderItem={({item}) =>
            <ArtistItem 
              name={item.name} 
              image={item.image}
              bio={item.bio} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  artistItem: {
    flex: 1,
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  }
});
