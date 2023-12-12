import React, {FC} from "react";
import {View} from "react-native";
import {BaseLayout, Button} from "../../components";
import {styles} from "./Login.style";

const Login: FC = () => {
  return (
    <BaseLayout>
      <View style={styles.sectionContainer}>
        <Button title={"Login"} buttonContainerStyle={styles.loginBtn} onPress={() => {}} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Login);
