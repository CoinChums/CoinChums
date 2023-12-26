import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

const { palette, typography } = theme;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white.dark,
    paddingHorizontal: spacing.averageWidth,
    paddingVertical: spacing.heroHeight,
  },
  headerText: {
    fontSize: typography.fontSize.subTitle,
    color: palette.black.dark,
    textAlign: 'center',
    fontWeight: '500',
    opacity: 0.8,
  },
  bottomShape: {
    backgroundColor: palette.white.dark,
  },
  btn: {
    marginTop: spacing.heroHeight,
    color: palette.primary.light,
    fontSize: typography.fontSize.average,
    textAlign: 'center',
    fontWeight: '500',
  },
  subTitle: {
    paddingTop: spacing.averageHeight,
    fontSize: typography.fontSize.big,
    color: palette.black.dark,
    textAlign: 'center',
    fontWeight: '400',
    opacity: 0.6,
  },
  lineContainer: {
    marginVertical: spacing.heroHeight,
    backgroundColor: palette.white.dark,
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
    borderColor: palette.secondary.light,
  },
  header: {
    flexDirection: 'row',
    height: dimensions.viewHeight(54),
    paddingHorizontal: spacing.normalWidth,
    borderColor: palette.primary.light,
    backgroundColor: palette.primary.light,
    alignItems: 'center',
    borderWidth: 2,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  cardHeader: {
    flex: 1,
    fontSize: typography.fontSize.medium,
    color: palette.white.dark,
    textAlign: 'center',
    fontWeight: '500',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.averageWidth,
  },
  divider: {
    borderColor: palette.secondary.light,
    paddingBottom: spacing.normalHeight,
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: typography.fontSize.medium,
    fontWeight: '400',
    color: palette.secondary.dark,
    marginRight: spacing.tinyWidth,
  },
  bold: {
    color: palette.black.dark,
    fontWeight: '700',
    opacity: 0.8,
  },
  userName: {
    borderWidth: 1,
    borderRadius: dimensions.viewWidth(6),
    paddingHorizontal: spacing.tinyWidth,
    paddingVertical: spacing.tinyHeight,
    marginRight: spacing.tinyWidth,
    borderColor: palette.secondary.light,
  },
  margin: {
    marginTop: spacing.normalHeight,
  },
  price: {
    borderBottomWidth: 1.5,
    borderBottomColor: palette.primary.light,
    marginLeft: spacing.smallHeight,
    fontSize: typography.fontSize.big,
    color: palette.black.light,
    fontWeight: '500',
    width: '40%',
  },
  priceIcon: {
    borderWidth: 1.5,
    paddingHorizontal: spacing.mediumWidth,
    paddingVertical: spacing.normalHeight,
    borderColor: palette.secondary.dark,
    borderRadius: 4,
  },
  spacing: {
    marginVertical: spacing.normalHeight,
  },
});
