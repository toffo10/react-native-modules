import React, { useEffect, useState } from 'react';
import {
  NativeEventEmitter,
  NativeModules, Pressable, Text,
  View
} from 'react-native';
import Toast from 'react-native-toast-message';
import EventModule from '../nativeModules/EventModule';
import { styles } from '../../App';

export const EventButton = () => {
  let [showEventButton, setShowEventButton] = useState(true);

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.EventModule);
    let eventListener = eventEmitter.addListener('CustomEvent', event => {
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
      EventModule.startEvent();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.hbox}>
      <Pressable
        onPress={() => { setShowEventButton(!showEventButton); }}
        style={({ pressed }) => [
          {
            ...styles.buttonStyle,
            backgroundColor: pressed ? '#388E3C' : styles.buttonStyle.backgroundColor,
            flex: 0.5
          },
        ]}>
        <Text style={styles.textStyle}>{showEventButton ? "REMOVE COMPONENT" : "ADD COMPONENT"}</Text>
      </Pressable>
      {showEventButton ?
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            {
              ...styles.buttonStyle,
              backgroundColor: pressed ? '#388E3C' : styles.buttonStyle.backgroundColor,
              flex: 0.5
            },
          ]}>
          <Text style={styles.textStyle}>THROW EVENT</Text>
        </Pressable> : <></>}
    </View>
  );
};
