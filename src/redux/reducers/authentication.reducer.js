import {userConstants} from '../constants';

const initialState = {
  loading: false,
  userRole: '',
  userData: {},
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loading: false,
        userRole: action.payload.user.role,
        userData: action.payload.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loading: false,
      };
    case userConstants.LOGOUT:
      return {
        userRole: '',
      };
    default:
      return state;
  }
}
