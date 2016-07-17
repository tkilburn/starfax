import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadShipBlacklistFilterSuccess(shipBlacklistFilters) {
  return {type: types.LOAD_SHIP_BLACKLIST_FILTERS_SUCCESS, shipBlacklistFilters};
}

export function addShipBlacklistFilter(shipBlacklistFilter) {
  return {type: types.ADD_SHIP_BLACKLIST_FILTER, shipBlacklistFilter};
}
export function removeShipBlacklistFilter(shipBlacklistFilter) {
  return {type: types.REMOVE_SHIP_BLACKLIST_FILTER, shipBlacklistFilter};
}

export function xaddShipBlacklistFilter(shipBlacklistFilter) {
  return function(dispatch) {
      dispatch(beginAjaxCall());
      dispatch(addShipBlacklistFilter(shipBlacklistFilter));
  };
}

// export function loadAuthors() {
//   return dispatch => {
//     dispatch(loadAuthorsSuccess(authors));
//   };
// }
