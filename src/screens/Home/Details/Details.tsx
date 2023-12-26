import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { BaseLayout, ErrorScreen, Header } from '../../../components';

const Details = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const backPress = () => navigation.goBack();

  return (
    <BaseLayout>
      <Header title={t('common:details')} onPress={backPress} />
      <Text>{t('common:details')}</Text>
      <ErrorScreen description={t('common:err')} onBtnPress={() => {}} />
    </BaseLayout>
  );
};

export default React.memo(Details);
