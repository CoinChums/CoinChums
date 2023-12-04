import {StyleSheet} from "react-native";
import dimensions from "../../utils/dimensions";

export const styles = StyleSheet.create({
  btn: {
    marginTop: dimensions.viewHeight(30),
  },
  content: {
    marginTop: dimensions.viewHeight(25),
    paddingHorizontal: dimensions.viewWidth(50),
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
  },
  selectedRadio: {
    borderRadius: 10,
  },
  themes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: dimensions.viewHeight(5),
  },
});
