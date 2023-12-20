import {StyleSheet} from "react-native";
import {spacing} from "../../themes/spacing";
import dimensions from "../../utils/dimensions";

export const styles = StyleSheet.create({
  btn: {
    marginTop: spacing.heroHeight,
  },
  content: {
    marginTop: spacing.titleHeight,
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
    marginVertical: spacing.tinyHeight,
  },
});
