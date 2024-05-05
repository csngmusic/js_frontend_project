import React from 'react';

class Playlist extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      favorite: this.props.track.favorite
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({
      favorite: !this.state.favorite
    });

  }

  render() {
    return(
      <li onClick={this.handleClick}>{this.props.track.name} - {this.state.favorite? 'Liked' : 'Not liked'}</li>
    )
  }
}

export default Playlist;
