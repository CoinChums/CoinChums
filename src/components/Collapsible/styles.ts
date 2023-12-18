import {StyleSheet} from "react-native";
import dimensions from "../../utils/dimensions";
import {theme} from "../../themes";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  icon: {
    fontSize: theme.typography.fontSize.hero,
  },
});
