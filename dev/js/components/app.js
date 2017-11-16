import React from 'react';

import SearchInput from '../containers/search-input';
import ButtonDefault from '../containers/button-default';
import VideoDetails from '../containers/video-details';

require('../../scss/style.scss');

const App = () => (
    <div>
        <div className="row">
            <div className="col-sm-9"><SearchInput /></div>
            <div className="col-sm-3"><ButtonDefault buttonText="search now" /></div>
        </div>
        <div className="row">
            <div className="col-sm-3"><VideoDetails /></div>
            <div className="col-sm-3"></div>
            <div className="col-sm-6"></div>
        </div>
    </div>
);

export default App;