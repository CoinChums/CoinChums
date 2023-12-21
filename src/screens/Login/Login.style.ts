import {StyleSheet} from "react-native";
import {theme} from "../../themes";
import {spacing} from "../../themes/spacing";
import dimensions from "../../utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.white.dark,
    paddingHorizontal: dimensions.viewWidth(70),
  },
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundPrimary: {
    backgroundColor: theme.palette.primary.medium,
  },
  backgroundBlack: {
    backgroundColor: theme.palette.black.medium,
  },
  loginBtn: {
    marginTop: spacing.mediumHeight,
    borderRadius: 10,
    height: dimensions.viewHeight(45),
    width: "100%",
  },
  title: {
    color: theme.palette.white.dark,
    fontWeight: "500",
    fontSize: theme.typography.fontSize.average,
  },
  appIcon: {
    height: dimensions.viewHeight(100),
    width: dimensions.viewWidth(100),
  },
  terms: {
    marginTop: spacing.smallHeight,
    fontSize: theme.typography.fontSize.small,
    color: theme.palette.black.dark,
    textDecorationLine: "underline",
  },
});
