import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BottomShape } from '../../components';
import { APP_ROUTES } from '../../constants/enums';
import { NavigationParams } from '../../types/types';
import { styles } from './Onboarding.style';

const OnboardingComponent = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();

  const handleNext = () => {
    navigation.navigate(APP_ROUTES.launch);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to CoinChums!</Text>
        <Text style={styles.subTitle}>With CoinChums, Track balances effortlessly among friends or groups</Text>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.btn}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomShape}>
        <BottomShape />
      </View>
    </>
  );
};

export default React.memo(OnboardingComponent);
