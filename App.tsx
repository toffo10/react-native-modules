/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Button,
  NativeEventEmitter,
  NativeModules,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme
} from 'react-native';
import Toast from 'react-native-toast-message';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import EventModule from './src/EventModule';
import PromiseModule from './src/PromiseModule';
import SwiftModule from './src/SwiftModule';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <PromiseButton />
      <EventButton />
      <SwiftModuleButton />
      <Toast />
    </SafeAreaView>
  );
}

const PromiseButton = () => {

  const onPress = async () => {

    try {
      const eventId = await PromiseModule.createPromiseEvent(
        'Test',
        'Another param',
      );
      Toast.show({
        type: 'success',
        text1: `Created a new event with id ${eventId}`,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>Lancia promise</Text>
    </Pressable>
  );
};

const EventButton = () => {
  let [showEventButton, setShowEventButton] = useState(true);

  useEffect(() => {
    console.log('In useEffect');
    console.log(NativeModules.EventModule);

    const eventEmitter = new NativeEventEmitter(NativeModules.EventModule);
    let eventListener = eventEmitter.addListener('EventReminder', event => {
      Toast.show({
        type: 'success',
        text1: `Evento ricevuto!`,
        text2: `${event.eventProperty}`,
      });
    });

    return () => {
      console.log('Unmounted eventListener');
      eventListener.remove();
    };
  }, [])

  const onPress = async () => {
    try {
      EventModule.executeEvent("Evento di prova")
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.hbox}>
      <Pressable
        onPress={() => { setShowEventButton(!showEventButton) }}
        style={{...styles.buttonStyle, flex: 0.5}}>
        <Text style={styles.textStyle}>{showEventButton ? "Rimuovi componente" : "Aggiungi componente"}</Text>
      </Pressable>
      {showEventButton ?
        <Pressable
          onPress={onPress}
          style={{...styles.buttonStyle, flex: 0.5}}>
          <Text style={styles.textStyle}>Lancia evento</Text>
        </Pressable> : <></>
      }
    </View>
  );
}

const SwiftModuleButton = () => {
  const onPress = async () => {
    try {
      const eventId = await SwiftModule.swiftNativeMethod(
        'Test',
      );
      Toast.show({
        type: 'success',
        text1: `Created a new event with id ${eventId}`,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>Lancia promise Swift</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  buttonStyle: {
    paddingVertical: 24,
    marginHorizontal: 8,
    marginVertical: 24,
    borderWidth: 2,
    borderColor: '#20232a',
    backgroundColor: '#26a33f',
    borderRadius: 100,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white'
  },
  hbox: {
    flexDirection: 'row',
    alignItems: 'stretch',
    width: '100%'
  }
});

export default App;
