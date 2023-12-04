import React from "react";
import NetworkLogger from "react-native-network-logger";
import {BaseLayout} from "../../components/BaseLayout/BaseLayout";

const NetworkLog = () => {
  return (
    <BaseLayout>
      <NetworkLogger theme={"light"} />
    </BaseLayout>
  );
};

export default React.memo(NetworkLog);
