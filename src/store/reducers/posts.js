import { FETCH_POSTS, POST_POSTS, DEL_POSTS, UPDATE_POSTS } from '../constants';

const initialState = {
    posts: null,
};
export default (state = initialState, action) => {
    if (action.type === FETCH_POSTS) {
        return {
            ...state,
            posts: action.data,
        };
    };
    if (action.type === POST_POSTS) {
        return {
            ...state,
            posts: [...state.posts, {
                userId: 1,
                title: action.data.title,
                body: action.data.body
            }],
        };
    };
    if (action.type === DEL_POSTS) {
        update = state.posts.filter(post => post.id !== action.data.id);
        return {
            posts: update.reverse()
        }
    };
    if (action.type === UPDATE_POSTS) {
        update = state.posts.map((post) => {
            if (post.id === action.data.id) {
                return action.data
            }
            return post
        })
        return {
            posts: update.reverse()
        }
    };

    return { ...state };
};