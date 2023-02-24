import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import React, { useState } from 'react';

export const RegistrationScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [isShownPassword, setIsShownPassword] = useState(false);

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    Keyboard.dismiss();
    console.log('Login: ', login, ', Email: ', email, ', Password: ', password);
    setLogin('');
    setEmail('');
    setPassword('');
  };

  const togglePassword = () => {
    setIsShownPassword(!isShownPassword);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.section}
    >
      <View style={styles.container}>
        <View style={styles.imgThumb}>
          {/* <Image /> */}
          <ImageBackground
            style={styles.addBtn}
            source={require('../../../assets/images/add.png')}
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
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    justifyContent: 'flex-end',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'roboto-regular',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    // fontFamily: 'roboto-regular',
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
