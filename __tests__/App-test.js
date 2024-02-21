import { render } from '@testing-library/react-native';
import * as React from 'react';
import 'react-native';
import { Home } from '../src/screens';

describe('App test', () => {
  // it('renders correctly', () => {
  //   const tree = renderer.create(<Home />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  test('Should render loading', () => {
    const screen = render(<Home />);
    const tree = screen.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
