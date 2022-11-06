import React from 'react';
import { View } from 'react-native';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {
  return (
    <Screen>
      <AppPicker placeholder="Category" icon="apps" />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
