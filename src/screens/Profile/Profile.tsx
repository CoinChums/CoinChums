import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { BaseLayout, Header } from '../../components';
import { styles } from './Profile.style';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <BaseLayout>
      <Header title={t('profile')} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{t('profile')}</Text>
        </View>
        <View style={styles.header}>
          <Text>{t('footer')}</Text>
        </View>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Profile);
