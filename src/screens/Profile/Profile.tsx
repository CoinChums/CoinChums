import React from "react";
import {Text, View} from "react-native";
import {Accordion, BaseLayout} from "../../components";
import {styles} from "./Profile.style";

const Profile = () => {
  return (
    <BaseLayout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <Accordion loading={false}>
          <Text>This is the content of the expansion tile.</Text>
        </Accordion>
        <View style={styles.header}>
          <Text>Footer</Text>
        </View>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Profile);
