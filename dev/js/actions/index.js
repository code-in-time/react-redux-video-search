import Axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const REMEMBER_SEARCH_INPUT = 'REMEMBER_SEARCH_INPUT';

/**
 * The action that will fetch the videos.
 * 
 * @param {*string} searchTerm - the serach term.
 */
export const fetchVideos = (searchTerm) => {

    const request = Axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            key: 'AIzaSyD5kJVZ1RHfeVBYgdcZ7tgzSowVZGUb8Og',
            // The search term.
            q: searchTerm,
            maxResults: 10,
            part: 'snippet',
            type: 'video'
        }
    });

    return {
        type: FETCH_VIDEOS,
        // this is a promise and will be resolve by the middleware.
        payload: request
    }
}

/**
 * This will send an action wit the text that was inserted into the the input.
 * 
 * @param {string} txt - the text that was inserted. 
 */
export const rememberSearchInput = (txt) => {
    console.log('remember search input: ', txt);
    return {
        type: 'REMEMBER_SEARCH_INPUT',
        payload: txt
    }
}
