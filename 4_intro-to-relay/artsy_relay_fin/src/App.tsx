import React from 'react';
import ReactDOM from 'react-dom';
import { graphql, QueryRenderer } from "react-relay"

import {createEnvironment} from "./relay/createEnvironment"

import './App.css';
import PopularArtists from './PopularArtists';
import registerServiceWorker from './registerServiceWorker'

import { AppQueryResponse } from "./__generated__/AppQuery.graphql"

const environment = createEnvironment()

function renderPopularArtists(props: AppQueryResponse) {
  return <PopularArtists popular_artists={props.popular_artists as any} />
}

ReactDOM.render(<QueryRenderer
  environment={environment}
  query={graphql`
    query AppQuery {
      popular_artists {
        ...PopularArtists_popular_artists
      }
    }
  `}
  variables={{}}
  render={data =>
    <div className="App">
     { !data.props ? <p>Loading</p> : renderPopularArtists(data.props as any)}
    </div>
  }
/>, document.getElementById('root'));

registerServiceWorker();
