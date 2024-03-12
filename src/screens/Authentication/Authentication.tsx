import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useReducer } from 'react';
import { View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { AuthActions } from '../../actions/auth';
import { BaseLayout, Button, ConditionRenderer, Input } from '../../components';
import { AUTH_ACTIONS, BUTTON_TYPE, TOAST_TYPE } from '../../constants/enums';
import { useAuth } from '../../store/useAuth/useAuth';
import { TNavRoutes } from '../../types/types';
import { styles } from './Authentication.style';
import { initialState, reducer } from './reducer';

const Authentication = () => {
  const toast = useToast();
  const route = useRoute<RouteProp<TNavRoutes, 'Authentication'>>();
  const { isSignup } = route.params;
  const { loginSuccess } = useAuth();

  const [state, dispatch] = useReducer(reducer, initialState);

  const anonymousSignIn = async () => {
    try {
      const user = await AuthActions.login();
      if (user.id) {
        loginSuccess({
          user,
          allowLogin: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleContinuation = () => {
    if (!isSignup) {
      anonymousSignIn();
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

  return (
    <BaseLayout>
      <View style={styles.container}>
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
              <Button type={BUTTON_TYPE.FILL} title="Login" onPress={anonymousSignIn} />
            </>
          }
        />
        <Button type={BUTTON_TYPE.UNDERLINE} title="Login as Guest" onPress={anonymousSignIn} />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Authentication);
