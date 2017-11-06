import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class VideoDetails extends Component {

    drawVideos(){
        const vl = this.props.videosList;

        // Check if there are videos to render.
        if (vl.length===0) {
            return <p className="bg-primary" >empty list</p>
        }

        // There are video to render.
        return vl.map(i => {
            //console.log('---------------------------',i);
            return (
                <p key={i.id.videoId} 
                   className="bg-info">
                       <img src={i.snippet.thumbnails.default.url} alt="" /> {i.snippet.channelTitle} </p>
            );
        })
    }

    render() {
        return (
            <div>
                {this.drawVideos()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        videosList: state.videosList
    };
}

// The function matchDispatchToProps is not used here as there is nothing to
// dispatch.

export default connect(mapStateToProps)(VideoDetails);