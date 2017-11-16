import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchVideos} from '../actions/index';
import Axios from 'axios';

class ButtonDefault extends Component {

    /**
     * This will handle the click for the button onClick event.
     * 
     * @param {object} e the tevent for the click 
     */
    onClickHandle(e) {

        this.props.fetchVideos(this.props.searchTerm);

        // // This is the state that will be returned.
        // let params = {
        //         key: 'AIzaSyD5kJVZ1RHfeVBYgdcZ7tgzSowVZGUb8Og',
        //         // The search term.
        //         q: this.props.searchTerm,
        //         maxResults: 10,
        //         part: 'snippet',
        //         type: 'video'
        //     };

        // // Do the API call.
        // Axios.get('https://www.googleapis.com/youtube/v3/search', { params })
        //     .then((response) => {
        //         // Save the videos in the store.
        //         this.props.saveVideos(response.data.items.slice());
        //     })
        //     .catch((response) => {
        //         console.error(response);
        //     });
    }
    
    render() {
        return (
            <div>
                <button
                    onClick={e => this.onClickHandle(e)}
                    type="button"
                    className="btn btn-primary">{this.props.buttonText}</button>
            </div>
        );
    }
}


 function mapStateToProps(state) {
     return {
         searchTerm: state.searchTerm
     };
 }

 function matchDispatchToProps(dispatch) {
     return bindActionCreators({fetchVideos:fetchVideos}, dispatch);
 }

 export default connect(mapStateToProps,matchDispatchToProps)(ButtonDefault);
