require('normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react';

import LeagueTable from './LeagueTable'

import lodash from 'lodash';

let yeomanImage = require('../images/yeoman.png');


//Hmmm raff ich das?
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="container">
          <div className="row">
            <LeagueTable  />
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
