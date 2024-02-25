import { StyleSheet } from 'react-native';
import dimensions from '../../utils/dimensions';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: dimensions.viewWidth(10),
    gap: spacing.mediumHeight,
  },
});
