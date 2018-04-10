import { graphql, QueryRenderer } from "react-relay"
import {createEnvironment} from "./relay/createEnvironment"
import React, { Component } from 'react';
import './App.css';

import ArtistItem from "./ArtistItem"
const environment = createEnvironment()

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`

          query AppQuery {
            popular_artists {
              artists {
                ...ArtistItem_artist
              }
              
            }
          }

        `}
        render={(a) => 
          <div className="App">
           { !a.props ? <p>Loading</p> : a.props.popular_artists.artists.map(a => <ArtistItem artist={a} /> )}
          </div>
        } 
      />
    )
  }
}

export default App;
