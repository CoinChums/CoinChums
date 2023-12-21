import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Text} from "react-native";
import {BaseLayout, ErrorScreen, Header} from "../../../components";

const Details = () => {
  const navigation = useNavigation();
  const backPress = () => navigation.goBack();
  return (
    <BaseLayout>
      <Header title="Details" onPress={backPress} />
      <Text>Details</Text>
      <ErrorScreen description={"Something went wrong!"} onBtnPress={() => {}} />
    </BaseLayout>
  );
};

export default React.memo(Details);
