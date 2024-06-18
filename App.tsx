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
  Text,
  useColorScheme
} from 'react-native';
import Toast from 'react-native-toast-message';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import EventModule from './src/EventModule';
import PromiseModule from './src/PromiseModule';


function App(): JSX.Element {
  let [showEventButton, setShowEventButton] = useState(true);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <PromiseButton />
      {showEventButton ? <EventButton /> : <></>}
      <Toast />
      <Button title='Unmount event button' onPress={() => { setShowEventButton(false) }} />
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
      style={{ margin: 8, backgroundColor: 'green' }}>
      <Text style={{ padding: 8, color: 'white' }}>Premi per lanciare promise</Text>
    </Pressable>
  );
};

const EventButton = () => {
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
    <Pressable
      onPress={onPress}
      style={{ margin: 8, backgroundColor: 'green' }}>
      <Text style={{ padding: 8, color: 'white' }}>Premi per lanciare evento</Text>
    </Pressable>
  );
}

export default App;
