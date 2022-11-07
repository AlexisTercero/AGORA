import React, { useState } from 'react';
import { View } from 'react-native';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <ListingEditScreen />;
}
