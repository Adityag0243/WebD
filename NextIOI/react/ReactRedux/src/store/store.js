// import {reducer} from '../reducer/reducer'
// import { thunkHandler } from '../action/productAction';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducer';

import { applyMiddleware, legacy_createStore as createStore } from 'redux';
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
