import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.white.dark,
    paddingHorizontal: spacing.mediumWidth,
    paddingVertical: spacing.mediumWidth,
    gap: spacing.mediumHeight,
  },
  touchableBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: spacing.normalWidth,
  },
  text: {
    fontSize: theme.typography.fontSize.medium,
    fontFamily: theme.typography.fontFamily[500],
    color: theme.palette.black.dark,
  },
});
