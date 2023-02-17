import * as types from './types';
import UserService from '../services/userService';

export const login = (address) => (dispatch) => {
    return UserService.login(address).then(
        (response) => {
            dispatch({
                type: types.LOGIN_USER,
                payload: response.data
            });

            return Promise.resolve();
        },

        (error) => {
            const message = (error.response &&
                             error.response.data &&
                             error.response.data.message) ||
                             error.message ||
                             error.toString();
            dispatch({
                type: types.SET_MESSAGE,
                payload: message
            });

            return Promise.reject();
        }
    )
}

export const logout = () => (dispatch) => {
    return dispatch({
        type: types.LOGOUT_USER
    })
}