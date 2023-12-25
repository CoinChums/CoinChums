import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { MainNavigator } from './navigation';
import reduxStore from './redux/reduxStore';

//To disable App font scaling
interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps = (Text as unknown as TextWithDefaultProps).defaultProps ?? {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling = false;

const App = (): JSX.Element => {
  return (
    <Provider store={reduxStore}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
