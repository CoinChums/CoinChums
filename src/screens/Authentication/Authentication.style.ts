import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.averageWidth,
    gap: spacing.averageHeight,
    backgroundColor: theme.palette.white.dark,
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
