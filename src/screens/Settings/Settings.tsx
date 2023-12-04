import React from "react";
import {Text, View} from "react-native";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";
import {styles} from "./Settings.style";

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
