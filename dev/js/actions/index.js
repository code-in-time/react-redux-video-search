export const selectUser = (user) => {
    console.log('you clicked on user: ', user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
}

// export const fetchVideos = () => {
//     console.log('Action to fetch all videos ');
//     return {
//         type: 'VIDEOS_FETCH',
//         payload: null
//     }
// }

/**
 * This is used to serach for videos.
 * @param {string} term 
 */
export const searchVideos = (term) => {
    //console.log('SEARCH for videos: ', term);
    return {
        type: 'SEARCH_FOR_VIDEOS',
        payload: term
    }
}

/**
 * This will send an action wit the text that was inserted into the the input.
 * 
 * @param {string} txt - the text that was inserted. 
 */
export const rememberSearchInput = (txt) => {
    console.log('remember serach input: ', txt);
    return {
        type: 'REMEMBER_SEARCH_INPUT',
        payload: txt
    }
}
