require('normalize.css');
require('styles/App.css');


import React from 'react/addons';

import lodash from 'lodash';

let yeomanImage = require('../images/yeoman.png');


var Team = React.createClass({

  render: function () {
    return (
      <div>
        <div className="col-md-12 btn btn-warning" style={{cursor: 'pointer'}}>
          {this.props.team.name}
        </div>
      </div>
    );
  }
});

var Teams = React.createClass({
  render: function () {
    var rows = [];
    this.props.teams.forEach(function (teamIter) {
      rows.push(<Team team={teamIter} key={teamIter.id}/>);
    });
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Stecktabelle</h3>
        </div>
        <div class="panel-body">
        {rows}
        </div>
      </div>


    );
  }
});


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

//Hmmm raff ich das?
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="container-fluid">
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
