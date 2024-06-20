import React from 'react';
import { Pressable, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import SwiftModule from '../nativeModules/SwiftModule';
import { styles } from '../../App';

export const SwiftModuleButton = () => {
  const onPress = async () => {
    try {
      const message = await SwiftModule.swiftPromiseMethod('param1');
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
      <Text style={styles.textStyle}>THROW SWIFT PROMISE</Text>
    </Pressable>
  );
};
