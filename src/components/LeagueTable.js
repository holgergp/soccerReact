import React, { PropTypes } from 'react';
import Teams from './Teams';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

var LeagueTable = React.createClass({
  getInitialState: function () {
    return {
      teams: TEAMLIST,
      newTeam: {}
    };
  },

  render: function () {
    return (
      <div className="col-md-6">
        <Teams teams={this.state.teams}/>

      </div>
    );
  }
});


var TEAMLIST = [
  {
    name: 'Borussia Mönchengladbach',
    id: 'BMG'
  },
  {
    name: 'Borussia Dortmund',
    id: 'BVB'
  },
  {
    name: 'FC Bayern München',
    id: 'FCB'
  },
  {
    name: 'VFL Wolfsburg',
    id: 'VFL'
  },
  {
    name: 'Bayer Leverkusen',
    id: 'B04'
  },
  {
    name: 'FC Schalke',
    id: 'S04'
  },
  {
    name: 'Hertha BSC Berlin',
    id: 'BSC'
  },
  {
    name: '1. FC Köln',
    id: '1FC'
  },
  {
    name: 'FC Ingolstadt',
    id: 'FCI'
  },
  {
    name: 'Darmstadt 98',
    id: 'D98'
  },
  {
    name: 'Hamburger SV',
    id: 'HSV'
  },
  {
    name: 'Eintracht Frankfurt',
    id: 'SGE'
  },
  {
    name: 'Werder Bremen',
    id: 'SVW'
  },
  {
    name: 'Hoffenheim',
    id: 'SAP'
  },
  {
    name: 'FC Augsburg',
    id: 'FCA'
  },
  {
    name: 'Hannover 96',
    id: 'H96'
  },
  {
    name: 'VFB Stuttgart',
    id: 'VFB'
  }
];


export default DragDropContext(HTML5Backend)(LeagueTable);

