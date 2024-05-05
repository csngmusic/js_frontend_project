import React from 'react';
import Playlist from './Playlist';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      playlist: []
    }
  }

  componentDidMount() {
    fetch('playlist').then(function(res) {
      return res.json();
    }).then((data) => {
      this.setState({
        playlist: data
      });
    });
  }

  render() {
    function mapPlaylist(track){
      return(
        <Playlist track={track} key = {track._id} />
      )
    }
    
    return (
      <div className="App">
        <ul>
          {
            this.state.playlist.map(mapPlaylist)
          }
        </ul>
      </div>
    );
  }
}

export default App;
