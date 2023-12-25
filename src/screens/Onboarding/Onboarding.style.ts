import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

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
    paddingTop: spacing.normalHeight,
    color: theme.palette.primary.light,
    fontSize: theme.typography.fontSize.average,
    textAlign: 'center',
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
  lineContainer: {
    marginVertical: spacing.bigHeight,
    backgroundColor: theme.palette.white.dark,
  },
  horizontalLine: {
    backgroundColor: theme.palette.white.light,
  },
  linearGradient: {
    borderRadius: 3,
    height: 8,
    alignSelf: 'center',
    width: '90%',
  },
});
