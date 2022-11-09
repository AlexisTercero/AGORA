import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import Screen from '../components/Screen';

const listings = [
  {
    id: 1,
    title: 'Leather jacket for sale',
    price: 300,
    image: require('../assets/leather-jacket.jpeg'),
  },
  {
    id: 2,
    title: 'Pink Couch',
    price: 3000,
    image: require('../assets/pink-couch.jpeg'),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 9,
    // backgroundColor: colors.light,
  },
});

export default ListingsScreen;
