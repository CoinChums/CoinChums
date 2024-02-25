import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { Header } from '../../components';
import { styles } from './Groups.style';

const Groups = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const backPress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Header title={t('groupCreation')} onPress={backPress} />
      <Text>Groups Screen</Text>
    </View>
  );
};

export default React.memo(Groups);
