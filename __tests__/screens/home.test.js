import { render } from '@testing-library/react-native';
import * as React from 'react';
import 'react-native';
import { Home } from '../../src/screens';

describe('App test', () => {
  test('Should render loading', () => {
    const screen = render(<Home />);
    const tree = screen.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
