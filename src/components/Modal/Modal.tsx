import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TModal } from './types';

export const OverlayModal: React.FC<TModal> = props => {
  const { width, visible, children, containerStyle = {}, onRequestClose } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <TouchableOpacity style={styles.background} activeOpacity={1} onPress={onRequestClose}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.popUpScreen, { width: width }, containerStyle]}>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
