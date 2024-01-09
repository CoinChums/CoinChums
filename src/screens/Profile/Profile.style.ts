import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: spacing.tinyHeight,
  },
  header: {
    alignItems: 'center',
    padding: spacing.normalWidth,
    backgroundColor: theme.palette.primary.light,
  },
  headerText: {
    fontSize: theme.typography.fontSize.medium,
  },
  content: {
    padding: spacing.normalWidth,
    backgroundColor: theme.palette.white.dark,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  rotation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
