/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import AppComponent from 'components/App';

describe('MainComponent', () => {
    let AppComponentCreated;

    beforeEach(() => {
      AppComponentCreated = createComponent(AppComponent);
    });

    it('should have its component name as default className', () => {
      console.log(AppComponentCreated.props);
      expect(AppComponentCreated.props.className).to.equal('index');
    });
});
