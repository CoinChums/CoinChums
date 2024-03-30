import { DefaultTheme, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../themes';
import i18n from '../../localization/i18n';
import { t } from 'i18next';
import { styles } from './Language.styles';
import { BaseLayout, Header } from '../../components';

const languages = [
  { code: 'en', label: t('language:english') },
  { code: 'ka', label: t('language:kannada') },
  { code: 'hn', label: t('language:hindi') },
];

const Languages = () => {
  const navigation = useNavigation();
  const [lang, setLang] = useState('en');
  const selectedLanguageCode = i18n.language;
  const backPress = () => navigation.goBack();

  return (
    <BaseLayout>
      <Header onPress={backPress} title={t('languages')} />
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
    </BaseLayout>
  );
};

export default React.memo(Languages);
