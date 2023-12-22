import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Text} from "react-native";
import {BaseLayout, ErrorScreen, Header} from "../../../components";
import {useTranslation} from "react-i18next";

const Details = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const backPress = () => navigation.goBack();

  return (
    <BaseLayout>
      <Header title="Details" onPress={backPress} />
      <Text>{t("common:details")}</Text>
      <ErrorScreen description={"Something went wrong!"} onBtnPress={() => {}} />
    </BaseLayout>
  );
};

export default React.memo(Details);
