import React, { PropTypes } from 'react';
import Position from './Position';

var Positions = React.createClass({
  render: function () {
    var rows = [];
    var swapPositions = this.props.swapPositions;
    var calculatePositionCssClass = this.props.calculatePositionCssClass;
    var updateTeamname = this.props.updateTeamname;

    this.props.positions.forEach(function (posIter) {
      rows.push(<Position position={posIter} key={posIter.position} swapPositions={swapPositions} calculatePositionCssClass = {calculatePositionCssClass}   updateTeamname={updateTeamname}/>);
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

export default Positions;
