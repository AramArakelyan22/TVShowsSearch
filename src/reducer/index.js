import { apiDataToClient } from '../utils/apiDataToClient';
import {
  TVSHOWS_FETCHED,
  TRAILERS_FETCHED
} from '../actions/actionTypes';

const initialState = {
  tvShows: [],
  trailer: ''
};

export default (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case TVSHOWS_FETCHED:
      newState.tvShows = apiDataToClient(action.payload);
      return newState;
    case TRAILERS_FETCHED:
      newState = {...state};
      newState.trailer = action.payload;
      return newState;
    default:
      return state
  }
}