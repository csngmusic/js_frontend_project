import React from 'react';
import { connect } from 'react-redux';

import { playlistDelete, playlistUpdateState } from './actions';


class PlaylistTrack extends React.Component{
  constructor(props) {
    super(props)

    this.onStatusClick = this.onStatusClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onStatusClick(e) {
    e.preventDefault();

    fetch(`playlist/${this.props.track._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        favorite: !this.props.track.favorite
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        console.log('Updated');
        this.props.dispatch(playlistUpdateState(this.props.track._id))
      }
      else {
        console.log('Not updated');
      }
    });
  }

  onDeleteClick(e) {
    e.preventDefault();

    fetch(`playlist/${this.props.track._id}`, {
      method: 'DELETE'
    }).then((res) => {
      if (res.status === 200) {
        console.log('Deleted');
        this.props.dispatch(playlistDelete(this.props.track._id))
      }
      else {
        console.log('Not deleted');
      }
    })
  }

  render() {
    return(
      <li> 
        <span>{this.props.track.name} </span>
        <span><i>{this.props.track.genre} </i></span>
        <span onClick={this.onStatusClick}><b>{this.props.track.favorite? 'Liked' : 'Not liked'} </b></span>
        <button onClick={this.onDeleteClick}>Delete</button>
      </li>
      )
  }
}

export default connect()(PlaylistTrack);
