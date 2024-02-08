import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { BaseLayout, Button, GroupListTile, Header } from '../../components';
import { BUTTON_TYPE } from '../../constants/enums';
import { expense } from '../../mocks';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Home.style';
import { THome } from './types';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();
  const header = 'Overall, you owe ₹ 300';
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`).then(res => res.json());
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <BaseLayout style={styles.home}>
      <Header title={t('home')} rightIcon={APP_IMAGES.search} />
      <View style={styles.container}>
        <Text style={styles.title}>{header}</Text>
        <FlatList data={expense.groups} renderItem={({ item }) => <GroupListTile node={item} />} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text>
              {item.id} {item.first_name}
            </Text>
          )}
        />
        <Button
          title={'Next Page'}
          onPress={() => setPage(prev => prev + 1)}
          titleStyle={styles.title}
          type={BUTTON_TYPE.FILL}
        />
        <Button
          title={'Previous Page'}
          onPress={() => setPage(prev => prev - 1)}
          titleStyle={styles.title}
          type={BUTTON_TYPE.FILL}
        />
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
