import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import Button from '../components/Button';
import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.png')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.tagline}>Real Free Market!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          color="dark"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Register"
          color="primary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 20,
    fontWeight: '100',
    paddingVertical: 20,
    color: colors.white,
  },
});

export default WelcomeScreen;
