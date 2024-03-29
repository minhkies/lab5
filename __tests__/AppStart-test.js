/**
 * @format
 */

import 'react-native';
import React from 'react';
import Contact from '../comps/Contact'
import About from '../comps/about';
import AppStart from '../comps/Start';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<AppStart />);
renderer.create(<Contact />);
renderer.create(<About />);
});
