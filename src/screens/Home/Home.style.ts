import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.smallWidth,
  },
  title: {
    fontSize: theme.typography.fontSize.big,
    fontFamily: theme.typography.fontFamily[700],
    color: theme.palette.secondary.dark,
    marginVertical: spacing.smallHeight,
  },
});
