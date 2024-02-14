import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  input: {
    borderColor: theme.palette.black.dark,
    height: dimensions.viewHeight(45),
    paddingHorizontal: spacing.mediumWidth,
    width: '100%',
  },
  input_outline: {
    borderWidth: 1,
    borderRadius: spacing.normalWidth,
  },
  input_rounded: {
    borderWidth: 1,
    borderRadius: dimensions.viewWidth(40),
  },
  input_underline: {
    borderBottomWidth: 1,
  },
});
