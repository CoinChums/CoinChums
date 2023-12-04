import {StyleSheet} from "react-native";
import dimensions from "../../utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  loaderContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  loaderStyle: {
    padding: dimensions.viewWidth(7),
  },
});
