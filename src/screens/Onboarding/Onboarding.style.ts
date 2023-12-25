import { StyleSheet } from 'react-native';
import { spacing } from '../../themes/spacing';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.white.dark,
    paddingHorizontal: spacing.averageWidth,
    paddingVertical: spacing.bigHeight,
  },
  headerText: {
    fontSize: theme.typography.fontSize.subTitle,
    color: theme.palette.black.dark,
    textAlign: 'center',
    fontWeight: '500',
    opacity: 0.8,
  },
  bottomShape: {
    backgroundColor: theme.palette.white.dark,
  },
  btn: {
    color: theme.palette.primary.light,
    fontSize: theme.typography.fontSize.average,
    fontWeight: '500',
  },
  subTitle: {
    paddingTop: spacing.averageHeight,
    fontSize: theme.typography.fontSize.big,
    color: theme.palette.black.dark,
    textAlign: 'center',
    fontWeight: '400',
    opacity: 0.6,
  },
});
