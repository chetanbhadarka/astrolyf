import {userConstants} from '../constants';
import {client} from '../../services/api-service';
export const userActions = {
  login,
  register,
  logout,
};

function login(data) {
  return dispatch => {
    dispatch(success(data));
  };
  function success(data) {
    return {
      type: userConstants.LOGIN_SUCCESS,
      payload: data,
    };
  }
}

function register() {
  return null;
}

function logout() {
  return dispatch => {
    dispatch(success());
  };

  function success() {
    return {type: userConstants.LOGOUT};
  }
}
