import * as types from '../actions/types';

const initialState = {
    histories: [],
    streaks: {},
    tokens: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_HISTORY:
            return {
                ...state,
                histories: payload.histories
            }
        case types.GET_STATS:
            return {
                ...state,
                streaks: payload.streaks,
                tokens: payload.tokens
            }
        default:
            return state;
    }
}