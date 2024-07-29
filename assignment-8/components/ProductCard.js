// components/ProductCard.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useFavourites } from '../context/FavouritesContext';

const ProductCard = ({ product }) => {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const isFavourite = favourites.some(item => item.id === product.id);

  const handleFavouriteToggle = () => {
    if (isFavourite) {
      removeFavourite(product.id);
    } else {
      addFavourite(product);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Button
        title={isFavourite ? "Remove from Favourites" : "Add to Favourites"}
        onPress={handleFavouriteToggle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductCard;
