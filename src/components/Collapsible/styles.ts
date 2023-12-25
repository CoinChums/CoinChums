import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: spacing.mediumWidth,
    marginHorizontal: spacing.averageWidth,
    paddingHorizontal: spacing.normalWidth,
    paddingVertical: spacing.normalHeight,
  },
  icon: {
    fontSize: theme.typography.fontSize.hero,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: theme.palette.black.medium,
    fontWeight: '700',
    fontSize: theme.typography.fontSize.medium,
  },
});
