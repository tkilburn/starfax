import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function shipReducer(state = initialState.ships, action) {
  switch (action.type) {
    case types.LOAD_SHIPS_SUCCESS:
      return action.ships;

      case types.CREATE_SHIP_SUCCESS:
        return [
          ...state,
          Object.assign({}, action.ship)
        ];

      case types.UPDATE_SHIP_SUCCESS:
        return [
          ...state.filter(ship => ship.id !== action.ship.id),
          Object.assign({}, action.ship)
        ];

    default:
      return state;
  }
}
