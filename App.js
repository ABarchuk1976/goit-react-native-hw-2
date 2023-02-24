import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { RegistrationScreen } from './src/screens/RegistrationScreen/RegistrationScreen';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     'roboto-regular': require('./assets/fonts/roboto_regular.ttf'),
//   });
// };

export const App = () => {
  // const [isReady, setIsReady] = useState();

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //   );
  // }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.bgImage}
        source={require('./assets/images/main-background.jpeg')}
      >
        {/* <RegistrationScreen /> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    resizeMode: 'cover',
  },
});
