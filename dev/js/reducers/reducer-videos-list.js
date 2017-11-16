

// TODO this must also be a an API call. AXIO can be used here.
export default function (state=[], action) {
        
    switch (action.type) {
        case "FETCH_VIDEOS":


            return action.payload;

            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ];

        break;
    }

    // There is no state, return the default state that is set in the arg.
    return state;
}
