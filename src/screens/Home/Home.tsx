import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { BaseLayout, Button, GroupListTile, Header, Tiles } from '../../components';
import { APP_ROUTES, BUTTON_TYPE } from '../../constants/enums';
import { expense } from '../../mocks';
import { NavigationParams } from '../../types/types';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Home.style';
import { THome } from './types';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const header = 'Overall, you owe ₹ 300';

  const handleNavigation = () => navigation.navigate(APP_ROUTES.groups);

  return (
    <BaseLayout style={styles.home}>
      <Header title={t('home')} />
      <View style={styles.container}>
        <Text style={styles.title}>{header}</Text>
        <FlatList data={expense.groups} renderItem={({ item }) => <GroupListTile node={item} />} />
        <View style={styles.btn}>
          <Button
            onPress={handleNavigation}
            title={'Create a new group'}
            type={BUTTON_TYPE.OUTLINE}
            leftIcon={APP_IMAGES.userGroup}
            titleStyle={styles.titleProps}
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Tiles title={'Gopu'} icon={APP_IMAGES.settings} />
      </View>
    </BaseLayout>
  );
};

export default Home;
