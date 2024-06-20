import React from 'react';
import { Pressable, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import PromiseModule from '../nativeModules/PromiseModule';
import { styles } from '../../App';

export const PromiseButton = () => {

  const onPress = async () => {

    try {
      const message = await PromiseModule.startPromise('param1');
      Toast.show({
        type: 'success',
        text1: `Message: ${message}`,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          ...styles.buttonStyle,
          backgroundColor: pressed ? '#388E3C' : styles.buttonStyle.backgroundColor,
        },
      ]}>
      <Text style={styles.textStyle}>THROW PROMISE</Text>
    </Pressable>
  );
};
