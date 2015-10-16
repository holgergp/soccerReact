import { DragSource } from 'react-dnd';
import React, { PropTypes } from 'react';
import { ItemTypes } from './Constants';

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const teamSource = {
  beginDrag(props, monitor, component) {
    // Return the data describing the dragged item
    const item = { sourceId: component.props.team.id };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const sourceTeam = monitor.getItem();
    const targetTeam = monitor.getDropResult();
    props.swapPositions(sourceTeam, targetTeam.id);

  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};



var Team = React.createClass({



  render: function () {

    // These two props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(

        <div className="col-md-12 btn btn-warning" style={{cursor: 'pointer'}}>
          {this.props.team.name}
        </div>

    );
  }
});

Team.propTypes = propTypes;

export default DragSource(ItemTypes.TEAM, teamSource, collect)(Team);




