import {StyleSheet} from "react-native";
import {spacing} from "../../themes/spacing";
import dimensions from "../../utils/dimensions";
import {theme} from "../../themes";

export const styles = StyleSheet.create({
  language: {
    paddingTop: spacing.normalHeight,
    textAlign: "center",
  },
  languageText: {
    padding: spacing.smallWidth,
    fontSize: theme.typography.fontSize.big,
    fontWeight: "600",
  },
});
