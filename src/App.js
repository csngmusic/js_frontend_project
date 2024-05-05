import React from 'react';
import Playlist from './Playlist';

class App extends React.Component{
  render() {

    const data = [
      {
        "_id": "6635486799e50cb0c3117b7b",
        "name": "test1",
        "genre": "Trance",
        "favorite": false
      },
      {
          "_id": "66373eb1c589fe8f4e01f19a",
          "name": "test 2",
          "description": "dubstep",
          "favorite": false
      },
      {
        "_id": "6635486799f50cb0c3117b7b",
        "name": "test3",
        "genre": "house",
        "favorite": false
      },
      {
          "_id": "66373eb1c589fe8f4a11f19a",
          "name": "test 4",
          "description": "trap",
          "favorite": false
      }
    ];

    function mapPlaylist(track){
      return(
        <Playlist track={track} key = {track._id} />
      )
    }
    
    return (
      <div className="App">
        <ul>
          {
            data.map(mapPlaylist)
          }
        </ul>
      </div>
    );
  }
}

export default App;
