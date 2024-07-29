import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ title }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://example.com/product-image.jpg' }}
        style={styles.image}
      />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});