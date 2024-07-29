// ProductCard.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useFavorites } from './FavoriteContext';

const ProductCard = ({ product }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Button
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        onPress={() => {
          if (isFavorite) {
            removeFavorite(product);
          } else {
            addFavorite(product);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 5,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default ProductCard;