import React from "react";
import {Text} from "react-native";
import {Accordion, BaseLayout, Header} from "../../components";

const Settings = () => {
  return (
    <BaseLayout>
      <Header title="Settings" />
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
