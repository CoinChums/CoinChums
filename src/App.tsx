import notifee from '@notifee/react-native';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
import { Alert, Text } from 'react-native';
import { Provider } from 'react-redux';
import { MainNavigator } from './navigation';
import reduxStore from './redux/reduxStore';

//To disable App font scaling
interface TextWithDefaultProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps ?? {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling = false;

const App = (): JSX.Element => {
  // Function to handle background messages
  const setupBackgroundHandler = () => {
    messaging().setBackgroundMessageHandler(
      async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        const channelId = await notifee.createChannel({
          id: 'cc',
          name: 'Coinchums Channel',
        });
        await notifee.displayNotification({
          title: remoteMessage.notification?.title,
          body: remoteMessage.notification?.body,
          android: {
            channelId,
            pressAction: {
              id: 'cc',
            },
          },
        });
      },
    );
  };

  // Function to handle foreground messages
  const setupForegroundHandler = () => {
    messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      console.log('Foreground Notification:', JSON.stringify(remoteMessage, null, 2));
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  };

  // Function to handle notifications when app opens from quit state
  const setupQuitStateHandler = () => {
    messaging().onNotificationOpenedApp((remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      console.log('Notification caused app to open from quit state:', remoteMessage.notification);
    });
  };

  useEffect(() => {
    setupForegroundHandler();
    setupBackgroundHandler();
    setupQuitStateHandler();
  }, []);

  return (
    <Provider store={reduxStore}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
