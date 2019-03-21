import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducer';


const middlewares = applyMiddleware(
  thunkMiddleware,
);


const store = createStore(
  reducer,
  middlewares
);

export default store;