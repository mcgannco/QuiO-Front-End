import merge from 'lodash/merge';

import { RECEIVE_DATA, CLEAR_DATA } from '../actions/data_actions';

const dataReducer = (state = {}, action) => {
  let newState = {};
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DATA:
      return merge({}, state, action.data);
    case CLEAR_DATA:
      return {};
    default:
      return state;
  }
};

export default dataReducer;
