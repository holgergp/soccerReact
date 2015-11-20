require('normalize.css');
require('styles/App.css');

import React from 'react';

import LeagueTable from './LeagueTable';


let AppComponent = React.createClass({
  render: function () {
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
});

AppComponent.defaultProps = {};

export default AppComponent;
