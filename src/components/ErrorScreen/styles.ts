import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    color: theme.palette.black.dark,
    opacity: 0.6,
    fontSize: theme.typography.fontSize.medium,
    fontWeight: '500',
    marginBottom: spacing.titleHeight,
    marginHorizontal: spacing.titleWidth,
    textAlign: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.black.light,
    borderRadius: dimensions.viewWidth(200),
    height: dimensions.viewWidth(48),
    width: dimensions.viewWidth(48),
    marginBottom: dimensions.viewHeight(8),
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: spacing.normalWidth,
    paddingHorizontal: spacing.titleWidth,
    marginLeft: spacing.titleWidth,
    marginRight: spacing.titleWidth,
    backgroundColor: theme.palette.primary.medium,
    borderRadius: spacing.heroWidth,
    minWidth: dimensions.viewWidth(320),
  },
  btnText: {
    color: theme.palette.white.dark,
    fontWeight: '700',
    fontSize: theme.typography.fontSize.medium,
    marginLeft: spacing.normalWidth,
  },
});
