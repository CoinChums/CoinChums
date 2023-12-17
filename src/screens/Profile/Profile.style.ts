import {StyleSheet} from "react-native";
import {theme} from "../../themes";
import dimensions from "../../utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    padding: dimensions.viewWidth(10),
    backgroundColor: theme.palette.primary.light,
  },
});
