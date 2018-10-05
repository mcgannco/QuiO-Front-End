import { combineReducers } from 'redux';

import data from './data_reducer';
import loading from './loading_reducer';

const rootReducer = combineReducers({
  data,
  loading
});

export default rootReducer;
