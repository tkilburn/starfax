import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function shipBlacklistFilterReducer(state = initialState.shipBlacklistFilters, action) {
  switch (action.type) {
    case types.LOAD_SHIP_BLACKLIST_FILTERS_SUCCESS:
        return action.shipBlacklistFilters;
    case types.ADD_SHIP_BLACKLIST_FILTER:
        return [
            ...state,
            action.shipBlacklistFilter
        ];
    case types.REMOVE_SHIP_BLACKLIST_FILTER:
        return [
            ...state.filter(item => item !== action.shipBlacklistFilter)
        ];

    default:
      return state;
  }
}
