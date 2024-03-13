import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultTheme } from '@react-navigation/native';
import { t } from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { Accordion, BaseLayout, Button, Header } from '../../components';
import { ASYNC_STORAGE, BUTTON_TYPE } from '../../constants/enums';
import { useAuth } from '../../store/useAuth/auth.actions';
import { theme } from '../../themes';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Settings.style';

const languages = [
  { code: 'en', label: t('language:english') },
  { code: 'ka', label: t('language:kannada') },
  { code: 'hn', label: t('language:hindi') },
];

const Settings = () => {
  const { t, i18n } = useTranslation();
  const { logoutUser } = useAuth();
  const [lang, setLang] = useState('en');
  const selectedLanguageCode = i18n.language;

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem(ASYNC_STORAGE.ACCESS_TOKEN);
      logoutUser();
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  return (
    <BaseLayout>
      <Header title={t('settings')} rightIcon={APP_IMAGES.search} />
      <Accordion loading={false} title={t('settings')}>
        <>
          <Text>{t('accExample')}</Text>
          <Text>{t('accExample')}</Text>
          <Text>{t('accExample')}</Text>
          <Text>{t('accExample')}</Text>
        </>
      </Accordion>
      <View>
        <Text style={styles.language}>
          {t('change_language')} ({lang})
        </Text>
        {languages.map(currentLang => {
          const selectedLanguage = currentLang.code === selectedLanguageCode;
          return (
            <Text
              key={currentLang.code}
              onPress={() => {
                setLang(currentLang.code);
                i18n.changeLanguage(currentLang.code);
              }}
              style={[
                {
                  color: selectedLanguage ? DefaultTheme.colors.primary : theme.palette.black.dark,
                },
                styles.languageText,
              ]}>
              {currentLang.label}
            </Text>
          );
        })}
      </View>
      <Button onPress={handleLogout} title={'Logout'} type={BUTTON_TYPE.FILL} />
    </BaseLayout>
  );
};

export default React.memo(Settings);
