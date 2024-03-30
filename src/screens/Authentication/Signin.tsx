import React, { useCallback, useReducer } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { BaseLayout, Button, IndicatorView, Input, OverlayModal, SVGImage } from '../../components';
import {
  AUTH_ACTIONS,
  BUTTON_TYPE,
  CONSTANTS,
  EReqMethod,
  SCREEN_STATE,
  TOAST_TYPE,
} from '../../constants/enums';
import { HttpService } from '../../services/http.service';
import { useAuth } from '../../store/useAuth/auth.store';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';
import { USERS } from '../../utils/endpoints';
import { loader, validateCredentials } from '../../utils/helper';
import { APP_IMAGES } from '../../utils/imageMapper';
import { initialState, reducer } from './reducer';
import { styles } from './style';

const SigninScreen = () => {
  const toast = useToast();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { handleLogin, state: authState } = useAuth();
  const isLoading = authState === SCREEN_STATE.LOADING;
  const screenWindowWidth = dimensions.screenWidth / 1.5;
  const statusBarColor = state.showModal ? theme.palette.black.light : theme.palette.white.dark;
  const iconSrc = require('../../assets/images/coinchums.png');

  const submitCouponCode = () => {
    const { couponCode } = state;
    if (couponCode.trim() !== CONSTANTS.MOCK_COUPON) {
      dispatch({ type: AUTH_ACTIONS.ERROR_MSG, payload: CONSTANTS.COUPON_ERROR });
      return;
    }
  };

  const handleLoginCall = async () => {
    const { email, password, fullName } = state;
    console.log('email, password, fullName ==>', email, password, fullName);
    const { isEmailValid, isPasswordValid } = validateCredentials(email, password);
    if (!isEmailValid || !isPasswordValid) {
      toast.show(CONSTANTS.INVALID_CRED, { type: TOAST_TYPE.DANGER });
      return;
    }
    try {
      const response = await HttpService({
        method: EReqMethod.POST,
        url: USERS,
        authRequired: false,
        body: {
          name: fullName,
          email: email,
          password: password,
        },
      });

      console.log('Response ==>', JSON.stringify(response, null, 2));
      if (response.data._id) {
        handleLogin(response.data);
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
            <Button type={BUTTON_TYPE.FILL} title="Submit" onPress={submitCouponCode} />
          </View>
        </OverlayModal>
        <Input
          type="text"
          placeholder="Your email address"
          variant="underlined"
          label="Email"
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
        <Button type={BUTTON_TYPE.FILL} title="Signin" onPress={handleLoginCall} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(SigninScreen);
