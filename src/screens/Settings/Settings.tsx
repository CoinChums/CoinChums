import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { BaseLayout, Header, SVGImage } from '../../components';
import { APP_ROUTES, ASYNC_STORAGE } from '../../constants/enums';
import { removeAsyncItem } from '../../services/storage.service';
import { useAuth } from '../../store/useAuth/auth.store';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import { NavigationParams } from '../../types/types';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Settings.style';

const Settings = () => {
  const { t } = useTranslation();
  const { setLogout } = useAuth();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();

  const handleLogout = async () => {
    try {
      await removeAsyncItem(ASYNC_STORAGE.ACCESS_TOKEN);
      await removeAsyncItem(ASYNC_STORAGE.COUPON);
      setLogout();
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  return (
    <BaseLayout>
      <Header title={t('Settings')} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate(APP_ROUTES.languages)}
          style={styles.touchableBtn}>
          <SVGImage
            assetSrc={APP_IMAGES.language}
            height={spacing.heroHeight}
            width={spacing.heroWidth}
          />
          <Text style={styles.text}>{t('languages')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.touchableBtn}>
          <SVGImage
            assetSrc={APP_IMAGES.logout}
            height={spacing.heroHeight}
            width={spacing.heroWidth}
            fill={theme.palette.primary.medium}
          />
          <Text style={styles.text}>{t('logout')}</Text>
        </TouchableOpacity>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Settings);
