import React from "react";
import {Text} from "react-native";
import {BaseLayout} from "../../components";

const Profile = () => {
  return (
    <BaseLayout>
      <Text>Profile</Text>
    </BaseLayout>
  );
};

export default React.memo(Profile);
