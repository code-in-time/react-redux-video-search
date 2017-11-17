
import {FETCH_VIDEOS} from '../actions/index';




// TODO this must also be a an API call. AXIO can be used here.
export default function (state=[], action) {
        
    switch (action.type) {
        case FETCH_VIDEOS:

            return action.payload.data.items.slice();

        break;
    }

    // There is no state, return the default state that is set in the arg.
    return state;
}
