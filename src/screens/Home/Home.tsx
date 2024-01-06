import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { BaseLayout, GroupListTile, Header } from '../../components';
import { expense } from '../../mocks';
import { THome } from './types';
import { styles } from './Home.style';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();
  const header = 'Overall, you owe ₹ 300';

  return (
    <BaseLayout>
      <Header title={t('home')} />
      <View style={styles.container}>
        <Text style={styles.title}>{header}</Text>
        <FlatList data={expense.groups} renderItem={({ item }) => <GroupListTile node={item} />} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Home);
