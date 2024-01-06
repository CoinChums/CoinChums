import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { BaseLayout, Button, GroupListTile, Header } from '../../components';
import { BUTTON_TYPE } from '../../constants/enums';
import { expense } from '../../mocks';
import { styles } from './Home.style';
import { THome } from './types';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();
  const header = 'Overall, you owe ₹ 300';

  return (
    <BaseLayout>
      <Header title={t('home')} />
      <View style={styles.container}>
        <Text style={styles.title}>{header}</Text>
        <FlatList data={expense.groups} renderItem={({ item }) => <GroupListTile node={item} />} />
        <Button title={'Create a new group'} type={BUTTON_TYPE.OUTLINE_ICON} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Home);
