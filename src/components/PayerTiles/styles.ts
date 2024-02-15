import { StyleSheet } from 'react-native';
import { spacing } from '../../themes/spacing';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    maxWidth: '60%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: spacing.smallWidth,
    backgroundColor: theme.palette.black.light,
    borderColor: theme.palette.black.light,
    borderRadius: spacing.tinyWidth,
  },
  input: {
    marginLeft: spacing.averageWidth,
  },
});
