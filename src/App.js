import React from 'react';
import {Provider, connect} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Playlist from './Playlist'
import PlaylistTrackAdd from './PlaylistTrackAdd';
import { playlistAddAll } from './actions';

class App extends React.Component{
  componentDidMount() {
    fetch('playlist').then(function(res) {
      return res.json();
    }).then((data) => {
      this.props.dispatch(playlistAddAll(data));
    });
  }

  render() {
    return (
      <div className="App">
        <Provider store={this.props.store}>
          <Router>
            <Routes>
              <Route path="/" element = {<Playlist />} />
              <Route path="/add" element = {<PlaylistTrackAdd />} />
            </Routes>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default connect()(App);
