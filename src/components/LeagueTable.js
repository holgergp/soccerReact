import React from 'react';
import Position from './Position';

import _ from 'lodash';
import { SAMPLE_LEAGUE_TABLE } from './Constants';


function findTeamPosition(teamId, positions) {
  let foundPosition = positions.filter(function (posIter) {
    return posIter.team.id === teamId;
  }).pop();

  return foundPosition.position;
}

var LeagueTable = React.createClass({


  getInitialState: function () {
    const defaultState = {
      positions: SAMPLE_LEAGUE_TABLE,
      newTeam: {}
    };
    if (_.isUndefined(localStorage.state)) {
      return defaultState;

    }
    let localstate = JSON.parse(localStorage.state);

    if (_.isUndefined(localstate)) {
      return defaultState;
    }
    return localstate;

  },

  componentDidUpdate: function () {
    //unused params prevProps and prevState
    localStorage.state = JSON.stringify(this.state);
  },


  render: function () {
    const updateTeamname = this.updateTeamname;

    var positionNodes = this.state.positions.map(function (posIter) {
      return (
        <Position position={posIter} key={posIter.position}
                  updateTeamname={updateTeamname}/>
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
  },


  updateTeamname: function (team, updatedText) {

    var positions = this.state.positions;

    var position = findTeamPosition(team.id, positions);

    team.name = updatedText;

    const enabledPosition = {
      position: position,
      team: team
    };

    positions[position - 1] = enabledPosition;

    this.setState({
        positions: positions,
        newTeam: {}
      }
    );
  }
});


export default LeagueTable;

