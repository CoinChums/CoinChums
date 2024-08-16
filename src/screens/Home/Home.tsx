import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import {
  BaseLayout,
  Button,
  ConditionRenderer,
  GroupListTile,
  Header,
  IndicatorView,
} from '../../components';
import { APP_ROUTES, BUTTON_TYPE, EReqMethod, SCREEN_STATE } from '../../constants/enums';
import { HttpService } from '../../services/http.service';
import { useGroups } from '../../store/groups/groups.store';
import { useAuth } from '../../store/useAuth/auth.store';
import { NavigationParams } from '../../types/types';
import { GET_GROUPS } from '../../utils/endpoints';
import { loader } from '../../utils/helper';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Home.style';
import { THome } from './types';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const header = 'Overall, you owe ₹ 300';
  const { setGroupList, getGroupList, getGroupDetails, setGroupListState } = useGroups();
  const { userDetails } = useAuth();
  const { groupIds } = userDetails()!;
  const { groups, responseState } = getGroupList();
  const { group } = getGroupDetails();
  const handleNavigation = () => navigation.navigate(APP_ROUTES.groups);

  useEffect(() => {
    (async () => {
      try {
        setGroupListState(SCREEN_STATE.LOADING);
        console.log('groupIds ==>', JSON.stringify(groupIds, null, 2));
        const response = await HttpService({
          method: EReqMethod.POST,
          url: GET_GROUPS,
          authRequired: true,
          body: groupIds,
        });
        console.log('response ==>', JSON.stringify(response.data, null, 2));
        if (response.data) {
          setGroupListState(SCREEN_STATE.SUCCESS);
          setGroupList(response.data);
        }
      } catch (err) {
        setGroupListState(SCREEN_STATE.ERROR);
        console.error(err);
      }
    })();
  }, [group]);

  return (
    <BaseLayout style={styles.home}>
      <Header title={t('home')} />
      <ConditionRenderer
        state={responseState === SCREEN_STATE.LOADING}
        C1={<IndicatorView isLoading={true} ref={loader} />}
        C2={
          <View style={styles.container}>
            <Text style={styles.title}>{header}</Text>
            <FlatList data={groups} renderItem={({ item }) => <GroupListTile node={item} />} />
            <View style={styles.btn}>
              <Button
                onPress={handleNavigation}
                title={'Start a new group'}
                type={BUTTON_TYPE.OUTLINE}
                leftIcon={APP_IMAGES.userGroup}
                titleStyle={styles.titleProps}
              />
            </View>
          </View>
        }
      />
    </BaseLayout>
  );
};

export default Home;
