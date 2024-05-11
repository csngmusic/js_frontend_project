import { PLAYLIST_ADD, PLAYLIST_ADD_ALL, PLAYLIST_DELETE, PLAYLIST_UPDATE_STATE } from "./actions";

import {combineReducers} from 'redux';

function tracks(state = [], action) {
    switch (action.type) {
        case PLAYLIST_ADD:
            return [...state, 
                        {   _id: action._id, 
                            name: action.name, 
                            genre: action.genre, 
                            favorite:false}
            ]
        case PLAYLIST_ADD_ALL:
            return [
                ...action.playlist
            ]
        case PLAYLIST_DELETE:
            return state.filter(function(track) {
                return track._id !== action._id;
              })
        case PLAYLIST_UPDATE_STATE:
            return state.map(function(track) {
                if (track._id === action._id) {
                    return {...track, favorite: !track.favorite}
                }
                return track
            })
        default:
            return state
    }
}

export default combineReducers({
    playlist: tracks
})