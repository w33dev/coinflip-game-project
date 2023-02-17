import * as types from '../actions/types';

const initialState = {
    isLoggedIn: false,
    auth: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                auth: payload
            }
        case types.LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false,
                auth: null
            }
        default:
            return state;
    }
}