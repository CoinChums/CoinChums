import React from "react";
import {Text, View} from "react-native";
import {BaseLayout} from "../../components";
import {styles} from "./Profile.style";

const Profile = () => {
  return (
    <BaseLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.header}>
          <Text>Footer</Text>
        </View>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Profile);
