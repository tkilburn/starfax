import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ships from './shipReducer';
import shipBlacklistFilters from './shipBlacklistFilterReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ships,
  shipBlacklistFilters,
  ajaxCallsInProgress
});

export default rootReducer;
