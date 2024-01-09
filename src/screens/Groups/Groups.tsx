import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Groups.style';

const Groups = () => {
  return (
    <View style={styles.container}>
      <Text>Groups Screen</Text>
    </View>
  );
};

export default React.memo(Groups);
