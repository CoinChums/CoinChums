import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

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
    zIndex: 10,
  },
  title: {
    paddingLeft: spacing.normalWidth,
    color: theme.palette.black.light,
    fontSize: theme.typography.fontSize.average,
    fontFamily: theme.typography.fontFamily[700],
    opacity: 0.8,
  },
  expenses: {
    backgroundColor: theme.palette.white.dark,
    marginTop: dimensions.viewHeight(9),
  },
  price: {
    color: theme.palette.black.dark,
    fontSize: theme.typography.fontSize.medium,
    fontFamily: theme.typography.fontFamily[400],
    lineHeight: spacing.averageHeight,
    marginBottom: dimensions.viewHeight(2),
    opacity: 0.8,
  },
  levels: {
    flexDirection: 'row',
    marginLeft: spacing.averageWidth,
    marginTop: -dimensions.viewHeight(3),
  },
});
