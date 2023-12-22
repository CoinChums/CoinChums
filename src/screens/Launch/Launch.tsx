import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {Image, Text, View} from "react-native";
import {BaseLayout, BottomShape, Button} from "../../components";
import {styles} from "./Launch.style";

const Login: FC = () => {
  const {t} = useTranslation();
  const iconSrc = require("../../assets/images/coinchums.png");

  const loginHandler = () => {};

  return (
    <BaseLayout style={styles.container}>
      <View style={styles.authContainer}>
        <Image source={iconSrc} style={styles.appIcon} />
        <Button
          title="Sign Up"
          buttonContainerStyle={[styles.loginBtn, styles.backgroundPrimary]}
          onPress={loginHandler}
          titleStyle={styles.title}
        />
        <Button
          title="Log in"
          buttonContainerStyle={[styles.loginBtn, styles.backgroundBlack]}
          onPress={loginHandler}
          titleStyle={styles.title}
        />
        <Text style={styles.terms}>{t("common:terms")}</Text>
      </View>
      <BottomShape />
    </BaseLayout>
  );
};

export default React.memo(Login);
