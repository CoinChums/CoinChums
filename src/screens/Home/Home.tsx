import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { BaseLayout, Button, GroupListTile, Header, OverlayModal } from '../../components';
import { BUTTON_TYPE } from '../../constants/enums';
import { expense } from '../../mocks';
import dimensions from '../../utils/dimensions';
import { APP_IMAGES } from '../../utils/imageMapper';
import { styles } from './Home.style';
import { THome } from './types';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();
  const header = 'Overall, you owe ₹ 300';
  const [showPopup, setShowPopup] = useState(false);

  return (
    <BaseLayout>
      <Header title={t('home')} rightIcon={APP_IMAGES.search} />
      <View style={styles.container}>
        <Text style={styles.title}>{header}</Text>
        <FlatList data={expense.groups} renderItem={({ item }) => <GroupListTile node={item} />} />
        <View style={styles.btn}>
          <Button title={'Create a new group'} type={BUTTON_TYPE.OUTLINE} leftIcon={APP_IMAGES.userGroup} />
        </View>
      </View>
      <Button type={BUTTON_TYPE.FILL} title="Popup" onPress={() => setShowPopup(true)} />
      <OverlayModal width={dimensions.viewHeight(300)} visible={showPopup} onRequestClose={() => setShowPopup(false)}>
        <View>
          <Text>Modal Component Example</Text>
        </View>
      </OverlayModal>
    </BaseLayout>
  );
};

export default React.memo(Home);
