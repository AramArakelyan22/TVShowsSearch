import { Navigation } from 'react-native-navigation';

import { WrappedSearchShows, WrappedTrailerView } from './App';

import { SEARCH_TV_SHOWS_VIEW, TRAILER_VIEW } from "./src/utils/constants";

Navigation.registerComponent(SEARCH_TV_SHOWS_VIEW, () => WrappedSearchShows);
Navigation.registerComponent(TRAILER_VIEW, () => WrappedTrailerView);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: SEARCH_TV_SHOWS_VIEW,
                options: {
                  topBar: {
                    title: {
                      text: 'Tv Shows Searcher'
                    }
                  }
                }
              }
            }]
          }
        }
    });
  })
