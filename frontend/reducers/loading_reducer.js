import merge from 'lodash/merge';

import { LOAD, RECEIVE_DATA } from '../actions/data_actions';

const dataReducer = (state = false, action) => {
  let newState = {};
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DATA:
      return false
    case LOAD:
      return true;
    default:
      return state;
  }
};

export default dataReducer;
