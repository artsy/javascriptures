import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PopularArtists from './PopularArtists';
import registerServiceWorker from './registerServiceWorker';

import PopularArtistsData from './artists.json'

ReactDOM.render((
  <div className="App">
    <PopularArtists popular_artists={PopularArtistsData} />
  </div>
), document.getElementById('root'));
registerServiceWorker();
