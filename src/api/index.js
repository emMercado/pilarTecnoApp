const BASE_URL = `https://jsonplaceholder.typicode.com`

///LIST POSTS
export const fetchPosts = () => {
    return fetch(BASE_URL + '/posts')
        .then(Response => {
            return Promise.all([Response, Response.json()])
        });
};
///LIST COMMENTS'S POST
export const fetchComments = ({ id }) => {
    return fetch(`${BASE_URL}/posts/${id}/comments`)
        .then(Response => {
            return Promise.all([Response, Response.json()])
        });
};
///CREATE POST
export const postPosts = ({ title, body }) => {
    return fetch(BASE_URL + '/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(Response => {
        console.log('json create: ' + JSON.stringify(Response))
        return Promise.all([Response, Response.json()])
    });
};
///EDIT POST
export const putPost = ({ title, body, id }) => {
    return fetch(`${BASE_URL}/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id,
            title,
            body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(Response => {
            console.log('json create: ' + JSON.stringify(Response))
            return Promise.all([Response, Response.json()])
        });
};
///DELETE POST
export const deletePost = ({ id }) => {
    return fetch(`${BASE_URL}/posts/${id}`, {
        method: 'DELETE'
    })
        .then(Response => {
            console.log('json create: ' + JSON.stringify(Response))
            return Promise.all([Response, Response.json()])
        });
};
///SHOW POST
export const showPost = ({ title, body, id }) => {
    return fetch(`${BASE_URL}/posts/${id}${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id,
            title,
            body, userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(Response => {
            console.log('json create: ' + JSON.stringify(Response))
            return Promise.all([Response, Response.json()])
        });
};