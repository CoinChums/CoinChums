import React from "react";
import {SafeAreaView, Text} from "react-native";

//To disable App font scaling
interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps ?? {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Text>CarPool</Text>
    </SafeAreaView>
  );
};

export default App;
