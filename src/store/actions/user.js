import { LOG_IN } from '../constants';

export const setUser = (data) => {
    return {
        type: LOG_IN,
        data
    }
}

