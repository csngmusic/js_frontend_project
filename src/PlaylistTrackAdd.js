import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { playlistAdd } from './actions';


class PlaylistTrackAddInner extends React.Component{
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
      this.props.dispatch(playlistAdd(data._id, data.name, data.genre))
      this.props.history('/');
    });
  }

  render() {
    return(
      <div className="Add">
        <NavLink to='/'>Back to list</NavLink>
        <form onSubmit={this.onAddFormSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} placeholder='Name'/>
          <input type="text" value={this.state.genre} onChange={this.onGenreChange} placeholder='Genre'/>
          <input type="submit" value="Add" />
        </form>
      </div>
        )
  }
}

const PlaylistTrackAdd = (props) => {
  return (
    <PlaylistTrackAddInner {...props} history = {useNavigate()} />
  )
}
export default connect()(PlaylistTrackAdd);
