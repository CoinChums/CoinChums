import React, { useCallback } from 'react';
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
import { styles } from './style';

const SignupScreen = () => {
  const toast = useToast();
  const {
    setUserDetails,
    state: authState,
    userDetails,
    setCouponCode,
    inputDetails,
    setShowModal,
    setErrorMessage,
    setInputCoupon,
    setInputFullName,
    setInputEmail,
    setInputPassword,
    setInputIsFullNameEntered,
    errorMessage,
  } = useAuth();
  const { fullName, email, password, showModal, isFullNameEntered, couponCode } = inputDetails();
  const userId = userDetails()!.id;
  const isLoading = authState === SCREEN_STATE.LOADING;
  const screenWindowWidth = dimensions.screenWidth / 1.5;
  const statusBarColor = showModal ? theme.palette.black.light : theme.palette.white.dark;
  const iconSrc = require('../../assets/images/coinchums.png');

  const handleContinuation = () => {
    if (!fullName.trim()) {
      toast.show('Please enter your name', {
        type: TOAST_TYPE.DANGER,
      });
      return;
    }
    setInputIsFullNameEntered(true);
  };

  const handleSignup = async () => {
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
        setShowModal(!showModal);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleModal = useCallback(() => {
    setErrorMessage('');
    setShowModal(!showModal);
  }, [showModal]);

  const readCouponCode = (text: string) => {
    setErrorMessage('');
    setInputCoupon(text);
  };

  const submitCouponCode = async (couponCode: string) => {
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
      setErrorMessage(CONSTANTS.COUPON_ERROR);
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
        <OverlayModal visible={showModal} width={screenWindowWidth} onRequestClose={toggleModal}>
          <View style={styles.modal}>
            <View>
              <Input
                type="text"
                placeholder="Coupon Code"
                variant="underlined"
                label="Coupon Code"
                onChangeText={readCouponCode}
              />
              {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
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
              onPress={() => submitCouponCode(couponCode)}
            />
          </View>
        </OverlayModal>
        <ConditionRenderer
          state={!isFullNameEntered}
          C1={
            <>
              <Input
                type="text"
                placeholder="Full Name"
                variant="underlined"
                label="Full Name"
                value={fullName}
                onChangeText={name => setInputFullName(name)}
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
                value={email}
                onChangeText={email => setInputEmail(email)}
              />
              <Input
                type="password"
                placeholder={'Your password'}
                variant={'underlined'}
                label={'Password'}
                value={password}
                onChangeText={password => setInputPassword(password)}
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
