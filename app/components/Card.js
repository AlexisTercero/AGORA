import React from 'react';
import { View, StyleSheet, onPress } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import Text from './Text';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.dark,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
    color: colors.white,
  },
});

export default Card;
