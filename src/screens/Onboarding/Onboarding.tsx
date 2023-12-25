import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { APP_ROUTES } from '../../constants/enums';
import { NavigationParams } from '../../types/types';

export const OnboardingComponent = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const handleNext = () => {
    navigation.navigate(APP_ROUTES.launch);
  };

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/images/coinchums.png')} />,
          title: 'Welcome',
          subtitle: 'This is the welcome screen',
        },
        {
          backgroundColor: '#fff',
          title: 'Introduction',
          subtitle: 'Introduce your app here',
          image: <Image source={require('../../assets/images/coinchums.png')} />,
        },
      ]}
      onSkip={handleNext}
      onDone={handleNext}
      showSkip={true}
      bottomBarHighlight={false}
      nextLabel="Next"
      skipLabel="Skip"
    />
  );
};
