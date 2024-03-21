import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  fillBtnContainer: {
    backgroundColor: theme.palette.secondary.medium,
    borderRadius: spacing.smallWidth,
    height: dimensions.viewHeight(45),
    width: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  outlineBtn: {
    backgroundColor: theme.palette.white.dark,
    borderRadius: spacing.smallWidth,
    height: dimensions.viewHeight(45),
    borderColor: theme.palette.primary.dark,
    borderWidth: 1,
  },
  title: {
    color: theme.palette.white.medium,
    fontFamily: theme.typography.fontFamily[700],
    fontSize: theme.typography.fontSize.average,
    marginHorizontal: spacing.smallWidth,
  },
  underlineBtn: {
    textDecorationLine: 'underline',
  },
});
