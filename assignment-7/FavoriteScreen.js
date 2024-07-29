// FavoriteScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useFavorites } from './FavoriteContext';
import ProductCard from './ProductCard';

const FavoriteScreen = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Items</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <ProductCard product={item} />
            <Button
              title="Remove from Favorites"
              onPress={() => removeFavorite(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 20,
  },
});

export default FavoriteScreen;