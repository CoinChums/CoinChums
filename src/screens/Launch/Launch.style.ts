import {ImageStyle, StyleSheet, ViewStyle} from "react-native";
import {theme} from "../../themes";
import {spacing} from "../../themes/spacing";
import dimensions from "../../utils/dimensions";

const containerStyle: ViewStyle = {
  flex: 1,
  backgroundColor: theme.palette.white.dark,
};

const backgroundPrimaryStyle = {
  backgroundColor: theme.palette.primary.medium,
};

const backgroundBlackStyle = {
  backgroundColor: theme.palette.secondary.dark,
};

const appIconStyle: ImageStyle = {
  height: dimensions.viewHeight(100),
  width: dimensions.viewWidth(100),
};

const termsStyle = {
  marginTop: spacing.smallHeight,
  fontSize: theme.typography.fontSize.small,
  color: theme.palette.black.dark,
  textDecorationLine: "underline",
};

interface Styles {
  container: ViewStyle;
  authContainer: ViewStyle;
  backgroundPrimary: ViewStyle;
  backgroundBlack: ViewStyle;
  loginBtn: ViewStyle;
  title: ViewStyle;
  appIcon: ImageStyle;
  terms: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: containerStyle,
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: dimensions.viewWidth(70),
  },
  backgroundPrimary: backgroundPrimaryStyle,
  backgroundBlack: backgroundBlackStyle,
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
  appIcon: appIconStyle,
  terms: termsStyle,
});
