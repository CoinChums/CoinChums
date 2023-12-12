import React from "react";
import {Text, View} from "react-native";
import {styles} from "./Settings.style";
import {BaseLayout} from "../../components";

const Settings = () => {
  return (
    <BaseLayout>
      <View style={styles.header}>
        <Text>Settings Screen</Text>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Settings);
