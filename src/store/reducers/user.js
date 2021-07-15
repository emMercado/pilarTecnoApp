import { LOG_IN } from '../constants';

const initialState = {
    user: null
};

export default (state = initialState, action) => {

    if (action.type === LOG_IN) {
        return {
            ...state,
            user: action.data
        };
    }
    return {...state};
   
};


