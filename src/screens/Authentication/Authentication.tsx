import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useCallback, useReducer } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import {
  BaseLayout,
  Button,
  ConditionRenderer,
  Input,
  OverlayModal,
  SVGImage,
} from '../../components';
import { AUTH_ACTIONS, BUTTON_TYPE, CONSTANTS, TOAST_TYPE } from '../../constants/enums';
import { useAuth } from '../../store/useAuth/useAuth';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import { TNavRoutes } from '../../types/types';
import dimensions from '../../utils/dimensions';
import { validateCredentials } from '../../utils/helper';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Authentication.style';
import { initialState, reducer } from './reducer';

const Authentication = () => {
  const toast = useToast();
  const route = useRoute<RouteProp<TNavRoutes, 'Authentication'>>();
  const { isSignup } = route.params;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { handleLogin } = useAuth();
  const screenWindowWidth = dimensions.screenWidth / 1.5;
  const statusBarColor = state.showModal ? theme.palette.black.light : theme.palette.white.dark;
  const iconSrc = require('../../assets/images/coinchums.png');

  const submitCouponCode = () => {
    const { couponCode } = state;
    if (couponCode.trim() !== CONSTANTS.MOCK_COUPON) {
      dispatch({ type: AUTH_ACTIONS.ERROR_MSG, payload: CONSTANTS.COUPON_ERROR });
      return;
    }
    handleLogin(state);
  };

  const handleContinuation = () => {
    if (!isSignup) {
      dispatch({ type: AUTH_ACTIONS.SHOW_MODAL, payload: true });
    } else {
      const { fullName } = state;
      if (!fullName.trim()) {
        toast.show('Please enter your name', {
          type: TOAST_TYPE.DANGER,
        });
        return;
      }
      dispatch({ type: AUTH_ACTIONS.SET_IS_FULL_NAME_ENTERED, payload: true });
    }
  };

  const handleLoginCall = () => {
    const { email, password } = state;
    const { isEmailValid, isPasswordValid } = validateCredentials(email, password);
    if (!isEmailValid || !isPasswordValid) {
      toast.show(CONSTANTS.INVALID_CRED, { type: TOAST_TYPE.DANGER });
      return;
    }
    dispatch({ type: AUTH_ACTIONS.SHOW_MODAL, payload: !state.showModal });
  };

  const toggleModal = useCallback(() => {
    dispatch({ type: AUTH_ACTIONS.ERROR_MSG, payload: '' });
    dispatch({ type: AUTH_ACTIONS.SHOW_MODAL, payload: !state.showModal });
  }, [state.showModal]);

  const readCouponCode = (text: string) => {
    dispatch({ type: AUTH_ACTIONS.ERROR_MSG, payload: '' });
    dispatch({ type: AUTH_ACTIONS.COUPON_CODE, payload: text });
  };

  return (
    <BaseLayout statusColor={statusBarColor}>
      <View style={styles.container}>
        <Image source={iconSrc} style={styles.appIcon} />
        <OverlayModal
          visible={state.showModal}
          width={screenWindowWidth}
          onRequestClose={toggleModal}>
          <View style={styles.modal}>
            <View>
              <Input
                type="text"
                placeholder="Coupon Code"
                variant="underlined"
                label="Coupon Code"
                onChangeText={readCouponCode}
              />
              {!!state.errorMessage && <Text style={styles.error}>{state.errorMessage}</Text>}
              <TouchableOpacity style={styles.closeIcon} onPress={toggleModal}>
                <SVGImage
                  assetSrc={APP_IMAGES.cross}
                  height={spacing.bigHeight}
                  width={spacing.bigWidth}
                />
              </TouchableOpacity>
            </View>
            <Button type={BUTTON_TYPE.FILL} title="Submit" onPress={submitCouponCode} />
          </View>
        </OverlayModal>
        <ConditionRenderer
          state={isSignup && !state.isFullNameEntered}
          C1={
            <>
              <Input
                type="text"
                placeholder="Full Name"
                variant="underlined"
                label="Full Name"
                value={state.fullName}
                onChangeText={text => dispatch({ type: AUTH_ACTIONS.SET_FULL_NAME, payload: text })}
              />
              <Button type={BUTTON_TYPE.FILL} title="Continue" onPress={handleContinuation} />
            </>
          }
          C2={
            <>
              <Input
                type="text"
                placeholder="Your email address"
                variant="underlined"
                label="Email address"
                value={state.email}
                onChangeText={text => dispatch({ type: AUTH_ACTIONS.SET_EMAIL, payload: text })}
              />
              <Input
                type="password"
                placeholder={'Your password'}
                variant={'underlined'}
                label={'Password'}
                onChangeText={text => dispatch({ type: AUTH_ACTIONS.SET_PASSWORD, payload: text })}
              />
              <Button type={BUTTON_TYPE.FILL} title="Login" onPress={handleLoginCall} />
            </>
          }
        />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Authentication);
