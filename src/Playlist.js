import React from 'react';

class Playlist extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      favorite: this.props.track.favorite
    }

    this.onStatusClick = this.onStatusClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onStatusClick(e) {
    e.preventDefault();

    this.setState({
      favorite: !this.state.favorite
    });
  }
  onDeleteClick(e) {
    e.preventDefault();

    fetch(`playlist/${this.props.track._id}`, {method: 'DELETE'
    }).then((res) => {
      if (res.status === 200) {
        console.log('Deleted');
        this.props.onTrackDelete(this.props.track._id);
      }
      else {
        console.log('Not deleted');
      }
    }).then((data) => {
      this.setState({
        playlist: data
      });
    });
  }

  render() {
    return(
      <li>{this.props.track.name} - {this.state.favorite? 'Liked' : 'Not liked'} <button onClick={this.onStatusClick}>Favorite</button>
      <button onClick={this.onDeleteClick}>Delete</button></li>
    )
  }
}

export default Playlist;
