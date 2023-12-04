import React, {FC} from "react";
import {View} from "react-native";
import {styles} from "./Login.style";
import {Button} from "../../components/Button/Button";

const Login: FC = () => {
  return (
    <View style={styles.sectionContainer}>
      <Button title={"Login"} buttonContainerStyle={styles.loginBtn} onPress={() => {}} />
    </View>
  );
};

export default React.memo(Login);
