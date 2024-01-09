import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.dark,
  },
  popUpScreen: {
    borderRadius: spacing.bigWidth,
    minHeight: dimensions.viewHeight(150),
    backgroundColor: theme.palette.white.dark,
    overflow: 'hidden',
    paddingHorizontal: spacing.mediumWidth,
    paddingVertical: spacing.mediumHeight,
  },
});
