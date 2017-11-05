import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchVideos} from '../actions/index';


class ButtonDefault extends Component {
    /**
     * This will handle the click for the button onClick event.
     * 
     * @param {object} e the tevent for the click 
     */
    onClickHandle(e) {

        // The seratch term.
        let sTerm = this.props.searchTerm;

        this.props.searchVideos(sTerm);
        console.log('onClickHandle sTerm:', sTerm);
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
     return bindActionCreators({searchVideos:searchVideos}, dispatch);
 }

 export default connect(mapStateToProps,matchDispatchToProps)(ButtonDefault);
