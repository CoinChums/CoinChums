import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

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
  linearGradient: {
    borderRadius: 3,
    height: 8,
    alignSelf: 'center',
    width: '100%',
  },
  headerContainer: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    paddingVertical: spacing.normalHeight,
    borderColor: theme.palette.secondary.light,
    paddingHorizontal: spacing.averageWidth,
  },
  header: {
    flexDirection: 'row',
    height: dimensions.viewHeight(44),
    paddingHorizontal: spacing.normalWidth,
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    alignItems: 'center',
    borderWidth: 2,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  cardHeader: {
    flex: 1,
    fontSize: theme.typography.fontSize.medium,
    color: theme.palette.white.dark,
    textAlign: 'center',
    fontWeight: '500',
  },
});
