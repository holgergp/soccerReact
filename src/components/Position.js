import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import Team from './Team';
import { swapPosition } from './LeagueTable';
import { ItemTypes } from './Constants';

const positionTarget = {
  drop(props, monitor, component) {
    return props.position.team;

  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    item: monitor.getItem()
  };
}


var Position = React.createClass({


  render: function () {

    var position = this.props.position;
    var team = this.props.position.team;
    var swapPositions = this.props.swapPositions;
    var calculatePositionCssClass = this.props.calculatePositionCssClass;
    const { x, y, connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div>
        <span>
   <Team team={team} positionNumber={position.position} swapPositions={swapPositions}
         calculatePositionCssClass={calculatePositionCssClass}/>
      </span>
      </div>
    );
  }
});


Position.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired,
  swapPositions: PropTypes.func.isRequired
};

export default DropTarget(ItemTypes.TEAM, positionTarget, collect)(Position);




