import { StyleSheet } from 'react-native';
import { spacing } from '../../themes/spacing';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    width: spacing.heroWidth,
    fontSize: theme.typography.fontSize.average,
    fontFamily: theme.typography.fontFamily[700],
  },
  ml8: {
    marginLeft: spacing.smallWidth,
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: theme.palette.background.light,
    padding: spacing.smallWidth,
    borderRadius: spacing.tinyWidth,
  },
  text: {
    fontSize: theme.typography.fontSize.medium,
    fontFamily: theme.typography.fontFamily[400],
    lineHeight: spacing.averageHeight,
    color: theme.palette.black.dark,
    opacity: 0.8,
  },
});
