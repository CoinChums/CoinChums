import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('react-native-device-info', () => mockRNDeviceInfo);
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: key => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

jest.mock('@react-navigation/native', () => {
  const module = jest.requireActual('@react-navigation/native');
  return {
    ...module,
    useNavigation: () => ({ goBack: jest.fn(), navigate: jest.fn() }),
  };
});
