import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BottomShape } from '../../components';
import { APP_ROUTES } from '../../constants/enums';
import { theme } from '../../themes';
import { NavigationParams } from '../../types/types';
import { styles } from './Onboarding.style';
import { ExpenseExample } from './components/Card';

const OnboardingComponent = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { t } = useTranslation();

  const handleNext = () => {
    navigation.navigate(APP_ROUTES.launch);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>{t('welcome')}</Text>
        <Text style={styles.subTitle}>{t('welcomeTitle')}</Text>
        <View style={styles.lineContainer}>
          <LinearGradient
            style={styles.linearGradient}
            colors={[
              theme.palette.warning.dark,
              theme.palette.warning.light,
              theme.palette.white.dark,
            ]} // Yellow gradient colors
            start={{ x: 0, y: 0.1 }}
            end={{ x: 1, y: 0.1 }}
          />
        </View>
        <ExpenseExample />
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.btn}>{t('next')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomShape}>
        <BottomShape />
      </View>
    </>
  );
};

export default React.memo(OnboardingComponent);
