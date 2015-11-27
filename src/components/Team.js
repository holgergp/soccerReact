import React, { PropTypes } from 'react';
import classNames  from 'classnames';

const propTypes = {

  positionNumber: PropTypes.number.isRequired,
  team: PropTypes.object.isRequired

};

function calculatePositionCssClass(positionNumber) {
  if (positionNumber === 1) {
    return 'tabellenfuehrerClass tabelleClass'
  }
  if (positionNumber <= 3) {
    return 'championsLeagueClass tabelleClass'
  }
  if (positionNumber <= 6) {
    return 'europaLeagueClass tabelleClass'
  }
  if (positionNumber <= 15) {
    return 'mittelfeldClass tabelleClass'
  }
  if (positionNumber === 16) {
    return 'relegationClass tabelleClass'
  }
  else {
    return 'abstiegClass tabelleClass'
  }
}

var Team = React.createClass({


  render: function () {

    const positionNumber = this.props.positionNumber;
    const team = this.props.team;
    const classes = classNames('col-md-12', 'btn', calculatePositionCssClass(positionNumber));
    return (
      <div className={ classes } style={{cursor: 'pointer'}}>
        <div>
          {team.name}
        </div>
      </div>)
      ;

  }


});

Team.propTypes = propTypes;

export default Team;




