import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Playlist from './Playlist'
import PlaylistTrackAdd from './PlaylistTrackAdd';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element = {<Playlist />} />
            <Route path="/add" element = {<PlaylistTrackAdd />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
