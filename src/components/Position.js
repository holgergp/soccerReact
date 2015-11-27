import React, { PropTypes } from 'react';
import Team from './Team';

let Position = React.createClass({


  render: function () {

    const position = this.props.position;
    const team = this.props.position.team;
    const updateTeamname = this.props.updateTeamname;
    return (
      <div>
        <span>
         <Team team={team} positionNumber={position.position} updateTeamname={updateTeamname}/>
      </span>
      </div>
    );
  }
});


Position.propTypes = {
  updateTeamname: PropTypes.func.isRequired,
  position: PropTypes.object.isRequired
};

export default Position;




