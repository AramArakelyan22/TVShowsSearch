import { getTheTvShows, getTheTrailers } from '../api';

import {
  TVSHOWS_FETCHED,
  TRAILERS_FETCHED,
} from './actionTypes'



export const tvShowsFetched = value => {
  return {
    type: TVSHOWS_FETCHED,
    payload: value
  }
};

export const trailersFetched = value => {
  return {
    type: TRAILERS_FETCHED,
    payload: value
  }
};

export const fetchTvShows = (text) => {

  return async (dispatch) => {

    try {
      const response = await getTheTvShows(text);
      dispatch(tvShowsFetched(response.data.results))
    }
    catch (err) {
      console.log(err);
      dispatch(tvShowsFetched([]))
    }
  }

};


export const getTvShowsTrailer = (id) => {

   return async (dispatch) => {
     try {
       const response = await getTheTrailers(id);
       dispatch( trailersFetched(response.data.results[0].key))
     }
     catch (err) {
       console.log(err);
       dispatch(trailersFetched(null))
     }
   }

};

