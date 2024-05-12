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
      <div className = "container" id="main">
        <div className = "row">
          <div className = "col-sm-8" id = "detail">
            <h1><b>Add new music to playlist</b></h1>
            <NavLink to='/' className="btn" id = "add">Back</NavLink>
          </div>
        </div>
        <tbody>
          <div className="widget-content">
            <div className='widget-content-wrapper'>
              <td><input type="text" value={this.state.name} onChange={this.onNameChange} placeholder='Name' className='form-control'/></td>
              <td><input type="text" value={this.state.genre} onChange={this.onGenreChange} placeholder='Genre' className='form-control'/></td>
              <td><input type="submit" value="Add" className='btn' id='add' onClick={this.onAddFormSubmit}/></td>
            </div>
          </div>
        </tbody>
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
