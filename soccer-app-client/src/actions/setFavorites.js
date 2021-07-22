
import { SET_FAVORITE } from '../types/types'
const SetFavorites = (obj) => {
    return {
        type: SET_FAVORITE,
        obj: obj
    }
}

export default SetFavorites