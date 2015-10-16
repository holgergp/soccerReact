import React, { PropTypes } from 'react';
import Positions from './Positions';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


function findTeamPosition(teamId, positions) {
  var foundPosition = -1;

  positions.forEach(function (posIter) {
    if (posIter.team.id === teamId) {
      foundPosition = posIter.position;
    }
  });

  return foundPosition;

}

function findTeam(teamId, positions) {
  var foundTeam = {};

  positions.forEach(function (posIter) {
    if (posIter.team.id === teamId) {
      foundTeam = posIter.team;
    }
  });

  return foundTeam;

}

var LeagueTable = React.createClass({
  getInitialState: function () {
    return {
      positions: SAMPLE_LEAGUE_TABLE,
      newTeam: {}
    };
  },

  render: function () {
    return (
      <div className="col-md-6">
        <Positions positions={this.state.positions} swapPositions={this.swapPositions} calculatePositionCssClass={this.calculatePositionCssClass}/>

      </div>
    );
  },

  swapPositions: function (sourceTeamId, targetTeamId) {



    var updatedPositions = this.state.positions;

    var sourcePosition = findTeamPosition(sourceTeamId.sourceId,updatedPositions);
    var targetPosition = findTeamPosition(targetTeamId,updatedPositions);

    var sourceTeam = findTeam(sourceTeamId.sourceId,updatedPositions);
    var targetTeam = findTeam(targetTeamId,updatedPositions);

    var newTarget = {
      position : targetPosition,
      team : sourceTeam
    };

    var newSource = {
      position : sourcePosition,
      team : targetTeam
    };

    updatedPositions[targetPosition -1] = newTarget;
    updatedPositions[sourcePosition -1] = newSource;

    this.setState({
        positions: updatedPositions,
        newTeam: {}
      }
    );

  },

  calculatePositionCssClass: function(positionNumber){
    if(positionNumber === 1) {
      return "tabellenfuehrerClass"
    }
    if(positionNumber <= 3){
      return "championsLeagueClass"
    }
    if(positionNumber <= 6){
      return "europaLeagueClass"
    }
    if(positionNumber <= 15){
      return "mittelfeldClass"
    }
    if(positionNumber === 16){
      return "relegationClass"
    }
    else {
      return "abstiegClass"
    }
  }
});


var SAMPLE_LEAGUE_TABLE = [
  {
    position: 1,
    team: {
      name: 'Borussia Mönchengladbach',
      id: 'BMG'
    }
  },
  {
    position: 2,
    team: {
      name: 'Borussia Dortmund',
      id: 'BVB'
    }
  },
  {
    position: 3,
    team: {
      name: 'FC Bayern München',
      id: 'FCB'
    }
  },
  {
    position: 4,
    team: {
      name: 'VFL Wolfsburg',
      id: 'VFL'
    }
  },
  {
    position: 5,
    team: {
      name: 'Bayer Leverkusen',
      id: 'B04'
    }
  },
  {
    position: 6,
    team: {
      name: 'FC Schalke 04',
      id: 'S04'
    }
  },
  {
    position: 7,
    team: {
      name: 'Hertha BSC Berlin',
      id: 'BSC'
    }
  },
  {
    position: 8,
    team: {
      name: '1. FC Köln',
      id: '1FC'
    }
  },
  {
    position: 9,
    team: {
      name: 'FC Ingolstadt',
      id: 'FCI'
    }
  },
  {
    position: 10,
    team: {
      name: 'Darmstadt 98',
      id: 'D98'
    }
  },
  {
    position: 11,
    team: {
      name: 'Hamburger SV',
      id: 'HSV'
    }
  },
  {
    position: 12,
    team: {
      name: 'Eintracht Frankfurt',
      id: 'SGE'
    }
  },
  {
    position: 13,
    team: {
      name: 'Werder Bremen',
      id: 'SVW'
    }
  },
  {
    position: 14,
    team: {
      name: 'Hoffenheim',
      id: 'SAP'
    }
  },
  {
    position: 15,
    team: {
      name: 'FC Augsburg',
      id: 'FCA'
    }
  },
  {
    position: 16,
    team: {
      name: 'Hannover 96',
      id: 'H96'
    }
  },
  {
    position: 17,
    team: {
      name: 'Mainz 05',
      id: 'M05'
    }
  },
  {
    position: 18,
    team: {
      name: 'VFB Stuttgart',
      id: 'VFB'
    }
  }

];




export default DragDropContext(HTML5Backend)(LeagueTable);

