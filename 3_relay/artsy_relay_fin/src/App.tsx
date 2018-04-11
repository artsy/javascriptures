import React from 'react';
import ReactDOM from 'react-dom';
import { graphql, QueryRenderer } from "react-relay"

import {createEnvironment} from "./relay/createEnvironment"

import './App.css';
import PopularArtists from './PopularArtists';
import registerServiceWorker from './registerServiceWorker';

const environment = createEnvironment()

ReactDOM.render(<QueryRenderer
  environment={environment}
  query={graphql`
    query AppQuery {
      popular_artists {
        ...PopularArtists_popular_artists
      }
    }
  `}
  render={data =>
    <div className="App">
     { !data.props ? <p>Loading</p> : <PopularArtists popular_artists={data.props.popular_artists} />}
    </div>
  }
/>, document.getElementById('root'));

registerServiceWorker();
