// screens/ProductDetail.js
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ProductDetail = ({ route, navigation }) => {
  const { productId } = route.params;
  // Fetch product details based on productId (this is just an example)
  const product = {
    id: productId,
    name: 'Example Product',
    imageUrl: 'https://example.com/product_image.jpg',
    description: 'This is a great product.',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => {/* Add to cart logic */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default ProductDetail;
