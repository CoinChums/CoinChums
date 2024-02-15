import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: dimensions.viewHeight(50),
    backgroundColor: theme.palette.primary.medium,
    paddingHorizontal: spacing.normalWidth,
  },
  title: {
    color: theme.palette.black.dark,
    fontSize: theme.typography.fontSize.big,
    fontFamily: theme.typography.fontFamily[700],
  },
});
