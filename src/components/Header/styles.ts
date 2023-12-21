import {StyleSheet} from "react-native";
import dimensions from "../../utils/dimensions";
import {theme} from "../../themes";
import {spacing} from "../../themes/spacing";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: dimensions.viewHeight(50),
    backgroundColor: theme.palette.primary.light,
    paddingHorizontal: spacing.normalWidth,
  },
  title: {
    color: theme.palette.black.dark,
    fontSize: theme.typography.fontSize.average,
    fontWeight: "500",
  },
});
