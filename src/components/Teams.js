import React, { PropTypes } from 'react';
import Team from './Team';

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
        <div className="panel-body">
          {rows}
        </div>
      </div>


    );
  }
});

export default Teams;
