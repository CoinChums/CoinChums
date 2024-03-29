import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

const containerStyle: ViewStyle = {
  flex: 1,
  backgroundColor: theme.palette.white.dark,
};

const backgroundPrimaryStyle = {
  backgroundColor: theme.palette.primary.medium,
};

const appIconStyle: ImageStyle = {
  height: dimensions.viewHeight(100),
  width: dimensions.viewWidth(100),
};

const termsStyle = {
  marginTop: spacing.smallHeight,
  fontSize: theme.typography.fontSize.small,
  color: theme.palette.black.dark,
  textDecorationLine: 'underline',
};

interface Styles {
  container: ViewStyle;
  authContainer: ViewStyle;
  backgroundPrimary: ViewStyle;
  loginBtn: ViewStyle;
  title: ViewStyle;
  appIcon: ImageStyle;
  terms: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: containerStyle,
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimensions.viewWidth(70),
  },
  backgroundPrimary: backgroundPrimaryStyle,
  loginBtn: {
    marginTop: spacing.mediumHeight,
    borderRadius: 10,
    height: dimensions.viewHeight(45),
    width: '100%',
  },
  title: {
    color: theme.palette.white.dark,
    fontFamily: theme.typography.fontFamily[700],
    fontSize: theme.typography.fontSize.average,
  },
  appIcon: appIconStyle,
  terms: termsStyle,
});
