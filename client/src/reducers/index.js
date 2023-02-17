import { combineReducers } from 'redux';
import user from './user';
import info from './info';
import message from './message';

export default combineReducers({
    user,
    info,
    message
})