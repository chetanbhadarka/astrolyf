import {combineReducers} from 'redux';

import {authentication} from './authentication.reducer';

const allReducers = combineReducers({
  authentication,
});

const rootReducer = (state, action) => allReducers(state, action);

export default rootReducer;
