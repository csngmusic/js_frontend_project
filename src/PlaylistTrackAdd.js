import React from 'react';

class PlaylistTrackAdd extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      genre: ''
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
  }

  onNameChange(e) {
    e.preventDefault();

    this.setState({
      name: e.target.value
    });
  }

  onGenreChange(e) {
    e.preventDefault();

    this.setState({
      genre: e.target.value
    });
  }

  onAddFormSubmit(e) {
    e.preventDefault();

    fetch('playlist', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        genre: this.state.genre,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      this.props.onTrackAdd(data);
    });
  }
  render() {
    return(
      <form onSubmit={this.onAddFormSubmit}>
        <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder='Name'/>
        <input type="text" value={this.state.genre} onChange={this.onGenreChange} placeholder='Genre'/>
        <input type="submit" value="Add" />
      </form>
        )
  }
}

export default PlaylistTrackAdd;
