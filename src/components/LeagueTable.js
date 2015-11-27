import React from 'react';
import Position from './Position';

import _ from 'lodash';
import { SAMPLE_LEAGUE_TABLE } from './Constants';

var LeagueTable = React.createClass({


  getInitialState: function () {
    return {
      positions: SAMPLE_LEAGUE_TABLE
    };
  },

  render: function () {

    var positionNodes = this.state.positions.map(function (posIter) {
      return (
        <Position position={posIter} key={posIter.position}/>
      );
    });

    return (
      <div className="col-md-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Ligatabelle zum Selberstecken</h3>
          </div>
          <div className="panel-body">
            {positionNodes}
          </div>
        </div>
      </div>
    );
  }
});


export default LeagueTable;

