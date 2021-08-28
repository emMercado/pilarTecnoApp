/* const BASE_URL = `https://jsonplaceholder.typicode.com` */
const BASE_URL = `https://final-proyect-vac.herokuapp.com`

///LIST PLACES
export const fetchPosts = () => {
    return fetch(BASE_URL + '/places')
        .then(Response => {
            return Promise.all([Response, Response.json()])
        });
};
///LIST COMMENTS'S POST
/* export const fetchComments = ({ id }) => {
    return fetch(`${BASE_URL}/places/${id}/comments`)
        .then(Response => {
            return Promise.all([Response, Response.json()])
        });
}; */
///CREATE POST
export const postPosts = ({ id, name, address, img, urlMap }) => {
    return fetch(BASE_URL + '/places', {
        method: 'POST',
        body: JSON.stringify({
            id,
            name,
            address,
            img,
            urlMap,
            /* userId: 1, */
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
export const putPost = ({ _id, name, address, img, urlMap }) => {
    const id = _id
    console.log('------------------------')
    console.log('id del index', id)
    console.log('------------------------')
    return fetch(`${BASE_URL}/places/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id,
            name,
            address,
            img,
            urlMap,
           /*  userId: 1, */
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
export const deletePost = ({ data }) => {
    const { _id } = data

    return fetch(`${BASE_URL}/places/${_id}`, {
        method: 'DELETE'
    })
        .then(Response => {
            console.log('json create: ' + JSON.stringify(Response))
            return Promise.all([Response, Response.json()])
        });
};
///SHOW POST
export const showPost = ({ id, name, address, img, urlMap }) => {
    /* return fetch(`${BASE_URL}/places/${id}${id}`, { */
    return fetch(`${BASE_URL}/places/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id,
            name,
            address,
            img,
            urlMap,
          /*   userId: 1, */
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