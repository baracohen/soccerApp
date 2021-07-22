import { SET_FAVORITE} from "../types/types";


const initialState = {
    favorites: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            return {
                ...state,
                favorites: action.obj,    
            }

        default:
            return state;
    }
}