import * as APIUtil from '../util/data_util';
export const RECEIVE_DATA  = 'RECEIVE_DATA ';
export const CLEAR_DATA  = 'CLEAR_DATA ';

export const receiveData = (data) => (
  {
    type: RECEIVE_DATA,
    data
  }
);

export const clearData = () => (
  {
    type: CLEAR_DATA
  }
);

export const requestData = (str) => dispatch => (
  APIUtil.fetchData(str).then(data => (dispatch(receiveData(data)))
));
