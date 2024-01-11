import { StyleSheet, View } from 'react-native';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';

export type TBlocks = {
  level: number;
};

export const Blocks: React.FC<TBlocks> = props => {
  const { level } = props;
  const treeViews = Array.from({ length: level }, (_, index) => <View key={index} style={styles.tree} />);

  return <View>{treeViews}</View>;
};

const styles = StyleSheet.create({
  tree: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    height: dimensions.viewHeight(20),
    width: spacing.titleWidth,
    borderColor: theme.palette.secondary.dark,
  },
});
