/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import AppComponent from 'components/App';


import LeagueTable from 'components/LeagueTable';

describe('MainComponent', () => {
    let AppComponentCreated;

    beforeEach(() => {
      AppComponentCreated = createComponent(AppComponent);
    });

    it('should have its component name as default className', () => {
      expect(AppComponentCreated.props.className).to.equal('index');
    });
});

describe('LeagueTable', () => {
  let LeagueTableCreated;

  beforeEach(() => {
    LeagueTableCreated = createComponent(LeagueTable);
  });

  it('should have display 18 different clubs', () => {
    // Render with one set of props and test
    let root = TestUtils.renderIntoDocument(
      <LeagueTable />
    );
    let div = TestUtils.scryRenderedDOMComponentsWithClass(root, 'tabelleClass');

    expect(div.length).to.equal(18);

  });

});


