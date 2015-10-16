import React, { PropTypes } from 'react';
import Positions from './Positions';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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
        <Positions positions={this.state.positions}/>

      </div>
    );
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
    team:  {
      name: 'Bayer Leverkusen',
      id: 'B04'
    }
  },
  {
    position: 6,
    team:   {
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
    team:   {
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
    team:   {
      name: 'Darmstadt 98',
      id: 'D98'
    }
  },
  {
    position: 11,
    team:  {
      name: 'Hamburger SV',
      id: 'HSV'
    }
  },
  {
    position: 12,
    team:  {
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
    team:  {
      name: 'Hoffenheim',
      id: 'SAP'
    }
  },
  {
    position: 15,
    team:  {
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

