import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        autoCapitalize="none" //evita que automaticamente la primer letra del email se vuelva mayuscula
        autoCorrect={false} //evita correccion ortografica automatica
        icon="email"
        keyboardType="email-address" //facilita el tipeo de una direccion de email
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress" //ios permite autocompletar desde la keychain
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
