import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BaseLayout, Button, IndicatorView, Input, OverlayModal, SVGImage } from '../../components';
import { BUTTON_TYPE, SCREEN_STATE } from '../../constants/enums';
import { useAuth } from '../../store/useAuth/auth.store';
import { theme } from '../../themes';
import { spacing } from '../../themes/spacing';
import dimensions from '../../utils/dimensions';
import { emptyFunction, loader } from '../../utils/helper';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './style';

const SigninScreen = () => {
  const { state: authState } = useAuth();
  const isLoading = authState === SCREEN_STATE.LOADING;
  const screenWindowWidth = dimensions.screenWidth / 1.5;
  const statusBarColor = theme.palette.white.dark;
  const iconSrc = require('../../assets/images/coinchums.png');

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
        <OverlayModal visible={true} width={screenWindowWidth} onRequestClose={emptyFunction}>
          <View style={styles.modal}>
            <View>
              <Input
                type="text"
                placeholder="Coupon Code"
                variant="underlined"
                label="Coupon Code"
                onChangeText={emptyFunction}
              />
              <Text style={styles.error}>{''}</Text>
              <TouchableOpacity style={styles.closeIcon} onPress={emptyFunction}>
                <SVGImage
                  assetSrc={APP_IMAGES.cross}
                  height={spacing.bigHeight}
                  width={spacing.bigWidth}
                />
              </TouchableOpacity>
            </View>
            <Button type={BUTTON_TYPE.FILL} title="Submit" onPress={emptyFunction} />
          </View>
        </OverlayModal>
        <Input
          type="text"
          placeholder="Your email address"
          variant="underlined"
          label="Email"
          onChangeText={emptyFunction}
        />
        <Input
          type="password"
          placeholder={'Your password'}
          variant={'underlined'}
          label={'Password'}
          onChangeText={emptyFunction}
        />
        <Button type={BUTTON_TYPE.FILL} title="Signin" onPress={emptyFunction} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(SigninScreen);
