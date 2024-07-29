import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useFavourites } from '../context/FavouritesContext';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ product, children }) => {
  const { addFavourite, favourites } = useFavourites();
  const isFavourite = favourites.some((item) => item.id === product.id);

  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Button
        title={isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
        onPress={() => {
          isFavourite ? removeFavourite(product.id) : addFavourite(product);
        }}
        color={isFavourite ? 'red' : 'blue'}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default Card;
