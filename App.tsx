/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import Toast from 'react-native-toast-message';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { EventButton } from './src/components/EventButton';
import { PromiseButton } from './src/components/PromiseButton';
import { SwiftModuleButton } from './src/components/SwiftPromiseButton';
import { SwiftEventButton } from './src/components/SwiftEventButton';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <PromiseButton />
      <EventButton />
      {Platform.OS === 'ios' ? <View><SwiftModuleButton /><SwiftEventButton /></View> : <></>}
      <Toast />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  buttonStyle: {
    paddingVertical: 24,
    marginHorizontal: 8,
    marginVertical: 24,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    backgroundColor: '#4CAF50',
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
