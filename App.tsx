/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import SignInScreen from './src/components/screens/SignInScreen/SignInScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SignInScreen />
    </SafeAreaView>
  );
}

export default App;
