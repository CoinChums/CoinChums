import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { Button, Header, Input } from '../../components';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Groups.style';

const Groups = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const backPress = () => navigation.goBack();

  return (
    <View>
      <Header
        title={t('groupCreation')}
        onPress={backPress}
        rightIcon={APP_IMAGES.cross}
        iconAction={backPress} //TODO: CLEAR STATE ON CLOSE
      />
      <View style={styles.groupContainer}>
        <Text>Groups name</Text>
        <Input type="text" variant="underlined" />
      </View>
    </View>
  );
};

export default React.memo(Groups);
