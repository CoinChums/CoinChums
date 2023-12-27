import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';

export const styles = StyleSheet.create({
  language: {
    paddingTop: spacing.normalHeight,
    textAlign: 'center',
  },
  languageText: {
    padding: spacing.smallWidth,
    fontSize: theme.typography.fontSize.big,
    fontFamily: theme.typography.fontFamily[700],
  },
});
