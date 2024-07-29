import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

const data = [
  { id: '1', title: 'Product 1', description: 'Description 1', price: '$10', image: 'https://example.com/image1.jpg' },
  { id: '2', title: 'Product 2', description: 'Description 2', price: '$20', image: 'https://example.com/image2.jpg' },
  // Add more products here
];

const Item = ({ title, image }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function FlatListExample() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item title={item.title} image={item.image} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
  },
});