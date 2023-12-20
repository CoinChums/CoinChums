import React from "react";
import {Text, View} from "react-native";
import {Accordion, BaseLayout} from "../../components";
import {styles} from "./Settings.style";

const Settings = () => {
  return (
    <BaseLayout>
      <View style={styles.header}>
        <Text>Settings Screen</Text>
      </View>
      <Accordion loading={false} title={"Settings Page"}>
        <>
          <Text>This is the example usage of the Accordion Component.</Text>
          <Text>This is the example usage of the Accordion Component.</Text>
          <Text>This is the example usage of the Accordion Component.</Text>
          <Text>This is the example usage of the Accordion Component.</Text>
        </>
      </Accordion>
    </BaseLayout>
  );
};

export default React.memo(Settings);
