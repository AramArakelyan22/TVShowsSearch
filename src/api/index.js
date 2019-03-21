import axios from 'axios';

import { apiBaseURL, theMoveDBApiKey } from "../utils/constants";

export const getTheTvShows = ({text}) => {

  return axios({
      baseURL: apiBaseURL,
      url: 'search/tv',
      method: 'get',
      params: {
        page: 1,
        language: 'en-US',
        api_key: theMoveDBApiKey,
        query: text
      }
    }
)};


export const getTheTrailers = (id) => {

  return axios({
      baseURL: apiBaseURL,
      url: `tv/${id}/videos`,
      method: 'get',
      params: {
        page: 1,
        language: 'en-US',
        api_key: theMoveDBApiKey
      }
    }
  )};