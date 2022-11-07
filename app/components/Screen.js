import React from 'react';
import Constants from 'expo-constants'; //Trae data data puntual sobre el sistema operativo del dispositivo en el que está corriendo la App

import { SafeAreaView, StyleSheet, View } from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight, //obtengo la altura exacta de la status bar del dispositivo por medio de Constants.
  },
  view: {
    flex: 1,
  },
});

export default Screen;
