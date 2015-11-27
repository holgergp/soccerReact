import React, { PropTypes } from 'react';
import Team from './Team';

let Position = React.createClass({


  render: function () {

    const position = this.props.position;
    const team = this.props.position.team;
    return (
      <div>
        <span>
         <Team team={team} positionNumber={position.position} />
      </span>
      </div>
    );
  }
});


Position.propTypes = {
  position: PropTypes.object.isRequired
};

export default Position;




