import Axios from 'axios';

/**
 * The action that will fetch the videos.
 * 
 * @param {*string} searchTerm - the serach term.
 */
export const fetchVideos = (searchTerm) => {

    const request = Axios.get('https://www.googleapis.com/youtube/v3/search', {

        key: 'AIzaSyD5kJVZ1RHfeVBYgdcZ7tgzSowVZGUb8Og',
        // The search term.
        q: searchTerm,
        maxResults: 10,
        part: 'snippet',
        type: 'video'
    });

        // // Do the API call.
        // Axios.get('https://www.googleapis.com/youtube/v3/search', { params })
        //     .then((response) => {
        //         // Save the videos in the store.
        //         this.props.saveVideos(response.data.items.slice());
        //     })
        //     .catch((response) => {
        //         console.error(response);
        //     });

    //console.log('SEARCH for videos: ', term);
    return {
        type: 'FETCH_VIDEOS',
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
