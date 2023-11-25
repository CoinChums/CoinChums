import React from "react";
import {Text} from "react-native";
import {MainNavigator} from "./navigation";

//To disable App font scaling
interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps ?? {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;

const App = (): JSX.Element => {
  return <MainNavigator />;
};

export default App;
