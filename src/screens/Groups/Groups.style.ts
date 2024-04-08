import { StyleSheet } from 'react-native';
import { spacing } from '../../themes/spacing';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  groupContainer: {
    paddingHorizontal: spacing.mediumWidth,
    paddingVertical: spacing.mediumHeight,
  },
  input: {
    marginBottom: spacing.averageHeight,
  },
  error: {
    fontSize: theme.typography.fontSize.small,
    color: theme.palette.error.dark,
    marginBottom: spacing.tinyHeight,
  },
});
