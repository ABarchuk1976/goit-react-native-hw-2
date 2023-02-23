import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';

import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';

const loadApplication = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
  });
};

export const RegistrationScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [isShownPassword, setIsShownPassword] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  const handleHideKeyboard = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    handleHideKeyboard();
    console.log('Login: ', login, ', Email: ', email, ', Password: ', password);
    setLogin('');
    setEmail('');
    setPassword('');
  };

  const togglePassword = () => {
    setIsShownPassword(!isShownPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../Images/main-background.jpeg')}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View
            style={{
              ...styles.container,
              marginBottom: isShownKeyboard ? 130 : 0,
            }}
          >
            <View style={styles.imgThumb}>
              {/* <Image /> */}
              <ImageBackground
                style={styles.addBtn}
                source={require('../Images/add.png')}
              ></ImageBackground>
            </View>
            <Text style={styles.formTitle}>Registration</Text>

            <View style={styles.form}>
              <View style={styles.inputsWrapper}>
                <TextInput
                  style={{ ...styles.input, marginTop: 33 }}
                  inputMode="text"
                  value={login}
                  placeholder="Login..."
                  placeholderTextColor="#bdbdbd"
                  require
                  autoFocus={true}
                  textAlign="left"
                  autoCapitalize="none"
                  onChangeText={setLogin}
                  onFocus={() => setIsShownKeyboard(true)}
                />

                <TextInput
                  style={styles.input}
                  inputMode="email"
                  value={email}
                  placeholder="Email address..."
                  placeholderTextColor="#bdbdbd"
                  require
                  textAlign="left"
                  autoCapitalize="none"
                  onChangeText={setEmail}
                  onFocus={() => setIsShownKeyboard(true)}
                />

                <TextInput
                  style={styles.input}
                  inputMode="text"
                  value={password}
                  placeholder="Password..."
                  placeholderTextColor="#bdbdbd"
                  require
                  textAlign="left"
                  secureTextEntry={isShownPassword ? 'false' : 'true'}
                  autoCapitalize="none"
                  onChangeText={setPassword}
                  onFocus={() => setIsShownKeyboard(true)}
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.togglePassword}
                  onPress={togglePassword}
                >
                  <Text style={styles.text}>
                    {isShownPassword ? 'Hide' : 'Show'}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.submitBtn}
                onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.loginRef}>
                <Text style={styles.text}>Already have an account? Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  imgThumb: {
    position: 'relative',
    marginTop: -60,
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
  },
  addBtn: {
    position: 'absolute',
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },
  formTitle: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 35,
    color: '#212121',
    // fontFamily: 'Roboto-Regular',
  },
  form: {
    marginHorizontal: 16,
  },

  input: {
    marginTop: 16,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    padding: 16,
    color: '#212121',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },
  submitBtn: {
    backgroundColor: '#ff6c00',
    marginHorizontal: 16,
    padding: 16,
    marginTop: 43,
    borderRadius: 25,
  },
  btnTitle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
  },
  loginRef: {
    marginTop: 16,
    marginBottom: 66,
  },
  togglePassword: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  inputsWrapper: {
    position: 'relative',
  },
});
