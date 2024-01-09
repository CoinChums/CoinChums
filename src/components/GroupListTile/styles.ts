import { StyleSheet } from 'react-native';
import dimensions from '../../utils/dimensions';
import { spacing } from '../../themes/spacing';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.normalHeight,
  },
  imageContainer: {
    marginRight: spacing.averageWidth,
  },
  icon: {
    borderRadius: dimensions.viewWidth(12),
  },
  title: {
    fontSize: theme.typography.fontSize.average,
    fontFamily: theme.typography.fontFamily[400],
    lineHeight: spacing.averageHeight,
    color: theme.palette.black.dark,
  },
  subTitle: {
    fontSize: theme.typography.fontSize.medium,
    fontFamily: theme.typography.fontFamily[700],
    lineHeight: spacing.averageHeight,
    color: theme.palette.secondary.dark,
    opacity: 0.7,
  },
  debt: {
    color: theme.palette.error.light,
  },
  owes: {
    color: theme.palette.primary.medium,
  },
  balance: {
    fontSize: theme.typography.fontSize.medium,
    fontFamily: theme.typography.fontFamily[700],
    lineHeight: spacing.averageHeight,
  },
});
