import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: theme.palette.secondary.light,
    padding: spacing.bigWidth,
    height: spacing.titleHeight,
    width: spacing.titleWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing.bigWidth,
  },
  title: {
    paddingLeft: spacing.normalWidth,
    color: theme.palette.black.light,
    fontSize: theme.typography.fontSize.average,
    fontFamily: theme.typography.fontFamily[700],
    opacity: 0.8,
  },
});
