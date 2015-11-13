import React from 'react';
import Position from './Position';
import { DragDropContext } from 'react-dnd';

import _ from 'lodash';
import HTML5Backend from 'react-dnd-html5-backend';
import { SAMPLE_LEAGUE_TABLE } from './Constants';


function findTeamPosition(teamId, positions) {
  let foundPosition = -1;

  positions.forEach(function (posIter) {
    if (posIter.team.id === teamId) {
      foundPosition = posIter.position;
    }
  });

  return foundPosition;

}

function findTeam(teamId, positions) {
  let foundTeam = {};

  positions.forEach(function (posIter) {
    if (posIter.team.id === teamId) {
      foundTeam = posIter.team;
    }
  });

  return foundTeam;

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
    let rows = [];
    const swapPositions = this.swapPositions;
    const calculatePositionCssClass = this.calculatePositionCssClass;
    const updateTeamname = this.updateTeamname;

    this.state.positions.forEach(function (posIter) {
      rows.push(<Position position={posIter} key={posIter.position} swapPositions={swapPositions}
                          calculatePositionCssClass={calculatePositionCssClass}
                          updateTeamname={updateTeamname}/>);
    });
    return (
      <div className="col-md-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Ligatabelle zum Selberstecken</h3>
          </div>
          <div className="panel-body">
            {rows}
          </div>
        </div>
      </div>
    );
  },

  swapPositions: function (sourceTeamId, targetTeamId) {


    let updatedPositions = this.state.positions;

    const sourcePosition = findTeamPosition(sourceTeamId.sourceId, updatedPositions);
    const targetPosition = findTeamPosition(targetTeamId, updatedPositions);

    const sourceTeam = findTeam(sourceTeamId.sourceId, updatedPositions);
    const targetTeam = findTeam(targetTeamId, updatedPositions);

    const newTarget = {
      position: targetPosition,
      team: sourceTeam
    };

    const newSource = {
      position: sourcePosition,
      team: targetTeam
    };

    updatedPositions[targetPosition - 1] = newTarget;
    updatedPositions[sourcePosition - 1] = newSource;

    this.setState({
        positions: updatedPositions,
        newTeam: {}
      }
    );

  },

  calculatePositionCssClass: function (positionNumber) {
    if (positionNumber === 1) {
      return 'tabellenfuehrerClass tabelleClass'
    }
    if (positionNumber <= 3) {
      return 'championsLeagueClass tabelleClass'
    }
    if (positionNumber <= 6) {
      return 'europaLeagueClass tabelleClass'
    }
    if (positionNumber <= 15) {
      return 'mittelfeldClass tabelleClass'
    }
    if (positionNumber === 16) {
      return 'relegationClass tabelleClass'
    }
    else {
      return 'abstiegClass tabelleClass'
    }
  },

  switchEditing: function (team) {
    let positions = this.state.positions;

    const position = findTeamPosition(team.id, positions);

    team.editing = !team.editing;

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

  },

  updateTeamname: function (team, updatedText) {

    var positions = this.state.positions;

    var position = findTeamPosition(team.id, positions);

    //team.editing = false;
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




export default DragDropContext(HTML5Backend)(LeagueTable);

