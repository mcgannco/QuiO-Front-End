import values from 'lodash/values';
export const selectData = state => values(state.data);
