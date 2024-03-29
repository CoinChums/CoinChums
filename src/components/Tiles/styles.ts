import { StyleSheet } from 'react-native';
import { spacing } from '../../themes/spacing';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: spacing.normalWidth,
    fontSize: theme.typography.fontSize.medium,
    fontFamily: theme.typography.fontFamily[700],
  },
});
