import React, { PropTypes } from 'react';
import Team from './Team';

var Position = React.createClass({

  render: function () {

    var team = this.props.position.team;
    return (
      <div>
        <Team team={team}/>
      </div>
    );
  }
});


export default Position;




