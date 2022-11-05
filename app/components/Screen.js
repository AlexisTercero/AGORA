import React from 'react';
import Constants from 'expo-constants'; //Trae data data puntual sobre el sistema operativo del dispositivo en el que está corriendo la App

import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight, //obtengo la altura exacta de la status bar del dispositivo por medio de Constants.
  },
});

export default Screen;
