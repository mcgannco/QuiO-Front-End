import { connect } from 'react-redux';
import { requestData,clearData } from '../../actions/data_actions';
import { selectData } from '../../reducers/selectors';

import Data from './data';

const msp = state => {
  return({
    data: selectData(state)
  })
};

const mdp = dispatch => {
  return({
    requestData: (str) => dispatch(requestData(str)),
    clearData: () => dispatch(clearData())
  })
};

export default connect(msp, mdp)(Data);
