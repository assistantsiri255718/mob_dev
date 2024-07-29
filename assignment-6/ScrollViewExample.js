import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const data = [
  { id: '1', title: 'Product 1', image: 'https://example.com/image1.jpg' },
  { id: '2', title: 'Product 2', image: 'https://example.com/image2.jpg' },
  // Add more products here
];

const Item = ({ title, image }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function ScrollViewExample() {
  return (
    <ScrollView>
      {data.map(item => (
        <Item key={item.id} title={item.title} image={item.image} />
      ))}
    </ScrollView>
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