import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderColor: theme.palette.black.dark,
    height: dimensions.viewHeight(46),
    paddingHorizontal: spacing.mediumWidth,
    width: '100%',
    color: 'red',
  },
  input_outline: {
    borderWidth: 1,
    borderRadius: spacing.normalWidth,
  },
  input_rounded: {
    borderWidth: 1,
    borderRadius: dimensions.viewWidth(36),
  },
  input_underline: {
    borderBottomWidth: 1,
  },
  input_disabled: {
    opacity: 0.5,
    borderColor: theme.palette.black.light,
  },
  input_invalid: {
    borderColor: theme.palette.error.dark,
  },
  eyeIcon: {
    position: 'absolute',
    right: spacing.mediumWidth,
    transform: [{ translateY: -10 }],
  },
});
