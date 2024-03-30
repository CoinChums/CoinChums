import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';
import { BaseLayout, Header, SVGImage } from '../../components';
import { APP_ROUTES, ASYNC_STORAGE } from '../../constants/enums';
import { useAuth } from '../../store/useAuth/auth.store';
import { styles } from './Settings.style';
import { APP_IMAGES } from '../../utils/imageMapper';
import { spacing } from '../../themes/spacing';
import { NavigationParams } from '../../types/types';

const Settings = () => {
  const { t } = useTranslation();
  const { logoutUser } = useAuth();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();

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
      <Header title={t('Settings')} />
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate(APP_ROUTES.languages)}
          style={styles.logoutButton}>
          <SVGImage
            assetSrc={APP_IMAGES.language}
            height={spacing.heroHeight}
            width={spacing.heroWidth}
          />
          <Text style={styles.logoutText}>{t('languages')}</Text>
        </Pressable>
        <Pressable onPress={handleLogout} style={styles.logoutButton}>
          <SVGImage
            assetSrc={APP_IMAGES.logout}
            height={spacing.heroHeight}
            width={spacing.heroWidth}
          />
          <Text style={styles.logoutText}>{t('logout')}</Text>
        </Pressable>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Settings);
