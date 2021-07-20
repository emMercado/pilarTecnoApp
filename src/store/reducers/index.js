import { combineReducers } from 'redux';
import user from './user';
import posts from './posts';

export const rootReducer = combineReducers({
    user,
    posts,
})
