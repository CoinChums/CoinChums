import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, Text, View } from 'react-native';
import { BaseLayout, Button, ConditionRenderer, Header, Input } from '../../components';
import { BUTTON_TYPE, TOAST_TYPE } from '../../constants/enums';
import { validateTextInput } from '../../utils/helper';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Groups.style';
import { useToast } from 'react-native-toast-notifications';

const Groups = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const toast = useToast();

  const [groupName, setGroupName] = useState('');
  const [error, setError] = useState('');

  const backPress = () => navigation.goBack();

  const handleGroupNameChange = (text: string) => {
    setGroupName(text);
    setError('');
  };

  const createGroup = () => {
    Keyboard.dismiss();
    const validationError = validateTextInput(groupName);
    setError(validationError || '');
    if (!validationError) {
      toast.show(`${groupName} Group created successful!`, {
        type: TOAST_TYPE.SUCCESS,
      });
      navigation.goBack();
    }
  };

  return (
    <BaseLayout>
      <Header
        title={t('groupCreation')}
        onPress={backPress}
        rightIcon={APP_IMAGES.cross}
        iconAction={backPress} //TODO: CLEAR STATE ON CLOSE
      />
      <View style={styles.groupContainer}>
        <View style={styles.input}>
          <Text>{t('groupName')}</Text>
          <Input type="text" variant="underlined" onChangeText={handleGroupNameChange} />
          <ConditionRenderer
            state={!error}
            C1={<></>}
            C2={<Text style={styles.error}>{error}</Text>}
          />
        </View>
        <Button type={BUTTON_TYPE.FILL} title="Create Group" onPress={createGroup} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Groups);
