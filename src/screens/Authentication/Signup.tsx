import React, { useCallback, useReducer } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import {
  BaseLayout,
  Button,
  ConditionRenderer,
  IndicatorView,
  Input,
  OverlayModal,
  SVGImage,
} from '../../components';
import {
  AUTH_ACTIONS,
  BUTTON_TYPE,
  CONSTANTS,
  EReqMethod,
  SCREEN_STATE,
  TOAST_TYPE,
} from '../../constants/enums';
import { HttpService } from '../../services/http.service';
import { setCouponAsyncStorage } from '../../store/useAuth/auth.actions';
import { useAuth } from '../../store/useAuth/auth.store';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';
import { COUPON, SIGNUP } from '../../utils/endpoints';
import { loader, validateCredentials } from '../../utils/helper';
import { APP_IMAGES } from '../../utils/imageMapper';
import { initialState, reducer } from './reducer';
import { styles } from './style';
import { Action } from './types';

const SignupScreen = () => {
  const toast = useToast();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setUserDetails, state: authState, userDetails, setCouponCode } = useAuth();
  const userId = userDetails()!.id;
  const isLoading = authState === SCREEN_STATE.LOADING;
  const screenWindowWidth = dimensions.screenWidth / 1.5;
  const statusBarColor = state.showModal ? theme.palette.black.light : theme.palette.white.dark;
  const iconSrc = require('../../assets/images/coinchums.png');

  const handleContinuation = () => {
    const { fullName } = state;
    if (!fullName.trim()) {
      toast.show('Please enter your name', {
        type: TOAST_TYPE.DANGER,
      });
      return;
    }
    dispatch({ type: AUTH_ACTIONS.SET_IS_FULL_NAME_ENTERED, payload: true });
  };

  const handleSignup = async () => {
    const { email, password, fullName } = state;
    const { isEmailValid, isPasswordValid } = validateCredentials(email, password);
    if (!isEmailValid || !isPasswordValid) {
      toast.show(CONSTANTS.INVALID_CRED, { type: TOAST_TYPE.DANGER });
      return;
    }
    try {
      const response = await HttpService({
        method: EReqMethod.POST,
        url: SIGNUP,
        authRequired: false,
        body: {
          name: fullName,
          email: email,
          password: password,
        },
      });

      if (response.data._id) {
        setUserDetails(response.data);
        dispatch({ type: AUTH_ACTIONS.SHOW_MODAL, payload: !state.showModal });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleModal = useCallback(() => {
    dispatch({ type: AUTH_ACTIONS.ERROR_MSG, payload: '' });
    dispatch({ type: AUTH_ACTIONS.SHOW_MODAL, payload: !state.showModal });
  }, [state.showModal]);

  const readCouponCode = (text: string) => {
    dispatch({ type: AUTH_ACTIONS.ERROR_MSG, payload: '' });
    dispatch({ type: AUTH_ACTIONS.COUPON_CODE, payload: text });
  };

  const submitCouponCode = async (couponCode: string, dispatch: (action: Action) => void) => {
    try {
      if (userId) {
        const response = await HttpService({
          method: EReqMethod.POST,
          url: COUPON,
          authRequired: true,
          body: {
            userId: userId,
            couponCode: couponCode,
          },
        });
        setCouponCode(response.data.couponId);
        setCouponAsyncStorage(response.data.couponId);
      }
    } catch (err) {
      dispatch({ type: AUTH_ACTIONS.ERROR_MSG, payload: CONSTANTS.COUPON_ERROR });
      return;
    }
  };

  if (isLoading) {
    return (
      <View>
        <IndicatorView isLoading={isLoading} ref={loader} />
      </View>
    );
  }

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
            <Button
              type={BUTTON_TYPE.FILL}
              title="Submit"
              onPress={() => submitCouponCode(state.couponCode, dispatch)}
            />
          </View>
        </OverlayModal>
        <ConditionRenderer
          state={!state.isFullNameEntered}
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
              <Button type={BUTTON_TYPE.FILL} title="Signup" onPress={handleSignup} />
            </>
          }
        />
      </View>
    </BaseLayout>
  );
};

export default React.memo(SignupScreen);
