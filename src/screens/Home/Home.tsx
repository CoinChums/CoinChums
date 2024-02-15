import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { BaseLayout, Button, GroupListTile, Header, Input } from '../../components';
import { BUTTON_TYPE } from '../../constants/enums';
import { expense } from '../../mocks';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Home.style';
import { THome } from './types';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();
  const header = 'Overall, you owe ₹ 300';

  return (
    <BaseLayout style={styles.home}>
      <Header title={t('home')} rightIcon={APP_IMAGES.search} />
      <View style={styles.container}>
        <Text style={styles.title}>{header}</Text>
        <FlatList data={expense.groups} renderItem={({ item }) => <GroupListTile node={item} />} />
        <View style={styles.btn}>
          <Button
            title={'Create a new group'}
            type={BUTTON_TYPE.OUTLINE}
            leftIcon={APP_IMAGES.userGroup}
          />
        </View>
      </View>
    </BaseLayout>
  );
};

export default Home;
