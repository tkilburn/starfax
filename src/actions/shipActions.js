import shipApi from '../api/mockShipApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadShipsSuccess(ships) {
  return {type: types.LOAD_SHIPS_SUCCESS, ships};
}

export function createShipSuccess(ship) {
  return {type: types.CREATE_SHIP_SUCCESS, ship};
}

export function updateShipSuccess(ship) {
  return {type: types.UPDATE_SHIP_SUCCESS, ship};
}

export function loadShips() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return shipApi.getAllShips().then(ships => {
      dispatch(loadShipsSuccess(ships));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveShip(ship) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return shipApi.saveShip(ship).then(ship => {
      ship.id ? dispatch(updateShipSuccess(ship)) :
        dispatch(createShipSuccess(ship));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
