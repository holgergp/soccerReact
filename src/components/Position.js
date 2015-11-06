import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import Team from './Team';
import { ItemTypes } from './Constants';

const positionTarget = {
  drop(props) {
    //unused params monitor, component
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

    const position = this.props.position;
    const team = this.props.position.team;
    const updateTeamname = this.props.updateTeamname;
    const swapPositions = this.props.swapPositions;
    const calculatePositionCssClass = this.props.calculatePositionCssClass;
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        <span>
   <Team team={team} positionNumber={position.position} updateTeamname={updateTeamname} swapPositions={swapPositions}
         calculatePositionCssClass={calculatePositionCssClass}/>
      </span>
      </div>
    );
  }
});


Position.propTypes = {
  swapPositions: PropTypes.func.isRequired
};

export default DropTarget(ItemTypes.TEAM, positionTarget, collect)(Position);




