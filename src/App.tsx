import React from 'react';
import { LogBox, Text } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import { MainNavigator } from './navigation';
import { theme } from './themes';

//To disable App font scaling
interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps ?? {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling = false;

LogBox.ignoreAllLogs();
const App = (): JSX.Element => {
  return (
    <ToastProvider
      offset={100}
      animationType="slide-in"
      swipeEnabled={true}
      successColor={theme.palette.success.dark}
      dangerColor={theme.palette.error.dark}
      warningColor={theme.palette.warning.dark}
      duration={3000}
      textStyle={{ fontSize: theme.typography.fontSize.small }}>
      <MainNavigator />
    </ToastProvider>
  );
};

export default App;
