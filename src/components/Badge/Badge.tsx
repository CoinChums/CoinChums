import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

type BadgeProps = {
  height: number;
  varient: string;
  action: () => void;
};

export const Badge: React.FC<BadgeProps> = props => {
  const { height = 20, varient, action } = props;

  return (
    <TouchableOpacity
      style={[styles.container, { height: dimensions.viewHeight(height) }]}
      onPress={action}>
      <Text style={styles.text}>Badge</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.viewWidth(100),
    backgroundColor: theme.palette.primary.dark,
    borderRadius: spacing.tinyWidth,
    borderColor: theme.palette.white.dark,
    borderWidth: 1,
  },
  text: {
    color: theme.palette.white.dark,
    fontFamily: theme.typography.fontFamily[400],
    fontSize: theme.typography.fontSize.medium,
    lineHeight: spacing.averageHeight,
  },
});
