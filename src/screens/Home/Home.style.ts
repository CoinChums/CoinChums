import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: theme.palette.white.dark,
  },
  container: {
    paddingHorizontal: spacing.normalWidth,
  },
  title: {
    fontSize: theme.typography.fontSize.big,
    fontFamily: theme.typography.fontFamily[700],
    color: theme.palette.secondary.dark,
    marginVertical: spacing.normalHeight,
    lineHeight: spacing.bigHeight,
  },
  btn: {
    marginTop: spacing.smallHeight,
    marginHorizontal: dimensions.viewWidth(60),
  },
});
