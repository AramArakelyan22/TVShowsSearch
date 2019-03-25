import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import store from './src/store';

import SearchTvShowsView from './src/components/views/SearchTvShowsView';
import TrailerView from './src/components/views/TrailerView';

import { SEARCH_TV_SHOWS_VIEW, TRAILER_VIEW } from "./src/utils/constants";

Navigation.registerComponentWithRedux(SEARCH_TV_SHOWS_VIEW, () => SearchTvShowsView, Provider, store);
Navigation.registerComponentWithRedux(TRAILER_VIEW, () => TrailerView, Provider, store);

const App =  Navigation.events().registerAppLaunchedListener(() => {
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

export default App