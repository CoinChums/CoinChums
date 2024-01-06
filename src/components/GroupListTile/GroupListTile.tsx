import { Text, View } from 'react-native';
import { GroupListTileProps } from './types';

export const GroupListTile: React.FC<GroupListTileProps> = ({ node }) => {
  const { icon, title } = node;
  console.log(JSON.stringify(node, null, 2));
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};
