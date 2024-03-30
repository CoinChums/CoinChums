import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  language: {
    paddingTop: spacing.normalHeight,
    textAlign: 'center',
  },
  languageText: {
    paddingVertical: spacing.tinyHeight,
    fontSize: theme.typography.fontSize.big,
    fontFamily: theme.typography.fontFamily[700],
    lineHeight: spacing.averageHeight,
  },
});
