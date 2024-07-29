import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ product }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>{product.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Card;
