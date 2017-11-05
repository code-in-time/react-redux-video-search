import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {rememberSearchInput} from '../actions/index';


class SearchInput extends Component {

    render() {
        return (
            <div>
                <input
                    onChange={ (e) => this.props.rememberSearchInput(e.target.value)}
                    type="search"
                    className="form-control"
                    placeholder="search for a video"
                    value={this.props.searchTerm} />


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
    return bindActionCreators({rememberSearchInput: rememberSearchInput}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchInput);

// this.props.rememberSearchInput(e.target.value)