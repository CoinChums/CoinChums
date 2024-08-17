import { useEffect, useCallback } from 'react';
import { BackHandler } from 'react-native';
import dimensions from '../utils/dimensions';

type HandlerFunction = () => boolean;

function useAndroidBackHandler(handler?: HandlerFunction): void {
  const callback = useCallback(() => {
    let isNavigationHandled = false;
    if (typeof handler === 'function') {
      isNavigationHandled = handler();
    }
    return isNavigationHandled;
  }, [handler]);

  useEffect(() => {
    let listenerSubscription: any;
    if (dimensions.isAndroid()) {
      listenerSubscription = BackHandler.addEventListener('hardwareBackPress', callback);
    }

    return () => {
      if (dimensions.isAndroid() && listenerSubscription) {
        listenerSubscription?.remove();
      }
    };
  }, [callback]);
}

export default useAndroidBackHandler;
