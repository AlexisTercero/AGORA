import React, { useState } from 'react';
import { View } from 'react-native';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="Category"
        icon="apps"
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
