import React, { PropTypes } from 'react';
import classNames  from 'classnames';

import ContentEditable from  'react-wysiwyg';

const propTypes = {

  positionNumber: PropTypes.number.isRequired,
  updateTeamname: PropTypes.func.isRequired,
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
    const updateTeamname = this.props.updateTeamname;
    const team = this.props.team;
    const classes = classNames('col-md-12', 'btn', calculatePositionCssClass(positionNumber));
    return (
      <div className={ classes } style={{cursor: 'pointer'}}>
        <div>
          <ContentEditable
            tagName='div'
            onChange={onChange}
            className='textPointer'
            html={team.name}
            autofocus={true}
            maxLength={200}
            editing={this.props.team.editing}
            preventStyling
            noLinebreaks
          />
        </div>
      </div>)
      ;

    function onChange(text) {
      updateTeamname(team, text)
    }

  }


});

Team.propTypes = propTypes;

export default Team;




