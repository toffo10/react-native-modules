import React, { useEffect } from 'react';
import { NativeEventEmitter, NativeModules, Pressable, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import SwiftModule from '../nativeModules/SwiftModule';
import { styles } from '../../App';

export const SwiftEventButton = () => {

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.SwiftModule);
    let eventListener = eventEmitter.addListener('SwiftEvent', event => {
      Toast.show({
        type: 'success',
        text1: `Event received!`,
        text2: `${event.eventMessage}`,
      });
    });

    return () => {
      console.log('Unmounted eventListener');
      eventListener.remove();
    };
  }, []);

  
  const onPress = async () => {
    try {
      SwiftModule.swiftEventMethod();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>THROW SWIFT EVENT</Text>
    </Pressable>
  );
};
