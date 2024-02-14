import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.palette.black.dark,
    height: dimensions.viewHeight(45),
    paddingHorizontal: spacing.mediumWidth,
    width: '100%',
  },
  input_outline: {
    borderRadius: spacing.mediumWidth,
  },
  input_rounded: {
    borderRadius: dimensions.viewWidth(40),
  },
});
