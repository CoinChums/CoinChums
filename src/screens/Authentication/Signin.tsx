import React from 'react';
import { Image, View } from 'react-native';
import { BaseLayout, Button, IndicatorView, Input } from '../../components';
import {
  BUTTON_TYPE,
  CONSTANTS,
  EReqMethod,
  SCREEN_STATE,
  TOAST_TYPE,
} from '../../constants/enums';
import { HttpService } from '../../services/http.service';
import { useAuth } from '../../store/useAuth/auth.store';
import { theme } from '../../themes';
import { SIGNIN } from '../../utils/endpoints';
import { loader, validateCredentials } from '../../utils/helper';
import { styles } from './style';
import { setCouponAsyncStorage } from '../../store/useAuth/auth.actions';

const SigninScreen = () => {
  const {
    setUserDetails,
    state: authState,
    inputDetails,
    setShowModal,
    setInputEmail,
    setInputPassword,
    setCouponCode,
  } = useAuth();
  const { email, password, showModal } = inputDetails();
  const isLoading = authState === SCREEN_STATE.LOADING;
  const statusBarColor = theme.palette.white.dark;
  const iconSrc = require('../../assets/images/coinchums.png');

  const handleSignin = async () => {
    const { isEmailValid, isPasswordValid } = validateCredentials(email, password);
    if (!isEmailValid || !isPasswordValid) {
      toast.show(CONSTANTS.INVALID_CRED, { type: TOAST_TYPE.DANGER });
      return;
    }
    try {
      const response = await HttpService({
        method: EReqMethod.POST,
        url: SIGNIN,
        authRequired: false,
        body: {
          email: email,
          password: password,
        },
      });
      if (response.data._id) {
        setUserDetails(response.data);
        setCouponCode(response.data.couponId);
        setCouponAsyncStorage(response.data.couponId);
        setShowModal(!showModal);
      }
    } catch (err) {
      console.error(err);
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
        <Input
          type="text"
          placeholder="Your email address"
          variant="underlined"
          label="Email"
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
        <Button type={BUTTON_TYPE.FILL} title="Signin" onPress={handleSignin} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(SigninScreen);
