import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

import SearchTvShowsView from './src/components/views/SearchTvShowsView';
import TrailerView from './src/components/views/TrailerView';


function WrappedComponent (Component) {
  return function inject (props)  {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export const WrappedSearchShows = WrappedComponent(SearchTvShowsView);
export const WrappedTrailerView = WrappedComponent(TrailerView);