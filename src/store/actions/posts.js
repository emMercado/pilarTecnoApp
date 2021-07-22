import { FETCH_POSTS, POST_POSTS, DEL_POSTS, UPDATE_POSTS } from '../constants';
import { fetchPosts, postPosts, deletePost, putPost } from '../../api';

const getPostsSucess = (data) => {
    return {
        type: FETCH_POSTS,
        data
    }
}
const createPostSuceess = (data) => {
    return {
        type: POST_POSTS,
        data
    }
}
const delPostSuceess = (data) => {
    return {
        type: DEL_POSTS,
        data
    }
}
const updatePostSuceess = (data) => {
    return {
        type: UPDATE_POSTS,
        data
    }
}
export const getPosts = () => (dispatch) => {
    return fetchPosts()
        .then(([response, json]) => {
            dispatch(getPostsSucess(json))
            return json
        })
        .catch((error) => console.log(error))
}

export const createPost = (data) => (dispatch) => {
    const { title, body } = data
    return postPosts(data)
        .then(([response, json]) => {
            if (response.ok === true) {
                dispatch(createPostSuceess({ title, body }))
            }
            return json
        })
        .catch((error) => console.log(error))
}
export const delPost = (data) => (dispatch) => {
    const { id } = data
    return deletePost({ id })
        .then(([response, json]) => {
            if (response.ok === true) {
                dispatch(delPostSuceess(data))
            } return json
        })
        .catch((error) => console.log(error))
}
export const updatePosts = (data) => (dispatch) => {

    return putPost(data)
        .then(([response, json]) => {
            if (response.ok === true) {
                dispatch(updatePostSuceess( data ))
            }
            return json
        })
        .catch((error) => console.log(error))

}