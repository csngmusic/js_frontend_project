import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import PlaylistTrack from './PlaylistTrack';
import picture from './picture.png';
class Playlist extends React.Component{
  render() {
    return (
      <div className = "container" id="main">
        <div className = "row">
          <div className = "col-sm-3" id = "photo">
            <img id = "sm" src = {picture} alt = "" />
          </div>
          <div className = "col-sm-8" id = "detail">
            <h1><b>Music from your Library</b></h1>
            <NavLink to='/add' className="btn" id = "add">Add</NavLink>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <td>Liked</td>
              <td>Title</td>
              <td>Genre</td>
              <td><i></i></td>
            </tr>
          </thead>

          <tbody>
            {
              this.props.playlist.map((track) => {
                return(
                  <PlaylistTrack track={track} key={track._id} />
                )
              })
            }
          </tbody>
        </table>
      </div>
      
    );
  }
}
function mapStateToProps(state) {
  return {
    playlist: [...state.playlist]
  }
}
export default connect(mapStateToProps)(Playlist);
