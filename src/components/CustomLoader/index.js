import React from 'react';
import {View, Text, Modal, ActivityIndicator} from 'react-native';

import {styles} from './styles';

export default function index({text}) {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible
      onRequestClose={false}>
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <ActivityIndicator
            style={text ? styles.loader : styles.onlyLoader}
            color="#E1B87A"
            size="small"
          />
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
}
