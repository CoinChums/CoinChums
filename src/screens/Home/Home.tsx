import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { BaseLayout, GroupListTile, Header } from '../../components';
import { expense } from '../../mocks';
import { THome } from './types';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <Header title={t('home')} />
      <FlatList data={expense.groups} renderItem={({ item }) => <GroupListTile node={item} />} />
    </BaseLayout>
  );
};

export default React.memo(Home);
