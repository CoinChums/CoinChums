import React from 'react';
import { Modal, View } from 'react-native';
import { styles } from './styles';
import { TModal } from './types';

export const OverlayModal: React.FC<TModal> = props => {
  const { width, visible, children, containerStyle = {}, onRequestClose } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.background}>
        <View style={[styles.popUpScreen, { width: width }, containerStyle]}>{children}</View>
      </View>
    </Modal>
  );
};
