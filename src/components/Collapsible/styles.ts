import {StyleSheet} from "react-native";
import {theme} from "../../themes";
import {spacing} from "../../themes/spacing";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.palette.secondary.light,
    borderRadius: spacing.normalWidth,
    marginHorizontal: spacing.averageWidth,
    paddingHorizontal: spacing.normalWidth,
    paddingVertical: spacing.normalHeight,
  },

  icon: {
    fontSize: theme.typography.fontSize.hero,
  },
});
