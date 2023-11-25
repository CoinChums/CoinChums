import {StyleSheet} from "react-native";
import {theme} from "../../themes";

export const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.hero,
    fontWeight: "600",
  },
});
