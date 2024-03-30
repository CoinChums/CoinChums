import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  language: {
    paddingTop: spacing.normalHeight,
    textAlign: 'center',
  },
  languageText: {
    paddingVertical: spacing.tinyHeight,
    fontSize: theme.typography.fontSize.big,
    fontFamily: theme.typography.fontFamily[700],
    lineHeight: spacing.averageHeight,
  },
  container: {
    flex: 1,
    backgroundColor: theme.palette.white.dark,
    paddingHorizontal: spacing.mediumWidth,
    paddingVertical: spacing.mediumWidth,
    gap: 20,
  },
  btn: {
    paddingBottom: spacing.smallHeight,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  logoutText: {},
});
