import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { BaseLayout, Button, Header, Input } from '../../components';
import { BUTTON_TYPE, CONSTANTS, EReqMethod, TOAST_TYPE } from '../../constants/enums';
import { HttpService } from '../../services/http.service';
import { useGroups } from '../../store/groups/groups.store';
import { useAuth } from '../../store/useAuth/auth.store';
import { CREATE_GROUP } from '../../utils/endpoints';
import { validateTextInput } from '../../utils/helper';
import { styles } from './Groups.style';

const GroupCreation = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const toast = useToast();
  const {
    setInputTitle,
    inputEvents,
    setInputDescription,
    setErrorMessage,
    setGroups,
    errorMessage,
    resetState,
  } = useGroups();
  const { userDetails } = useAuth();
  const { title, description } = inputEvents();
  const { id } = userDetails()!;

  const backPress = () => {
    resetState();
    navigation.goBack();
  };

  const createGroup = async () => {
    try {
      Keyboard.dismiss();
      const validationError = validateTextInput(title);
      if (validationError) {
        setErrorMessage(validationError);
        return;
      }

      const response = await HttpService({
        method: EReqMethod.POST,
        url: CREATE_GROUP,
        authRequired: true,
        body: {
          title,
          description,
          createdBy: id,
          members: [id],
          category: 'default',
        },
      });

      if (response.data._id) {
        setGroups(response.data);
        navigation.goBack();
        toast.show(`${title} Group created successfully!`, {
          type: TOAST_TYPE.SUCCESS,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message || CONSTANTS.GENERIC_ERROR_MESSAGE);
      } else {
        setErrorMessage(String(error) || CONSTANTS.GENERIC_ERROR_MESSAGE);
      }
      console.error(error);
    }
  };

  return (
    <BaseLayout>
      <Header title={t('groupCreation')} onPress={backPress} />
      <View style={styles.groupContainer}>
        <View style={styles.input}>
          <Text>{t('groupName')}</Text>
          <Input
            type="text"
            variant="underlined"
            value={title}
            onChangeText={name => setInputTitle(name)}
          />
        </View>
        <View style={styles.input}>
          <Text>{t('groupDesc')}</Text>
          <Input
            type="text"
            variant="underlined"
            value={description}
            onChangeText={desc => setInputDescription(desc)}
          />
        </View>
        {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        <Button type={BUTTON_TYPE.FILL} title={t('create')} onPress={createGroup} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(GroupCreation);
