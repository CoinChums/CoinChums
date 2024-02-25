import { StyleSheet } from 'react-native';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.averageWidth,
    gap: spacing.averageHeight,
  },
});
