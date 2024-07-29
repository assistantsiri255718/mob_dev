// screens/FavouritesPage.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { useFavourites } from '../context/FavouritesContext'; // Ensure the path is correct

const FavouritesPage = ({ navigation }) => {
  const { favourites, removeFavourite } = useFavourites();

  const handleRemoveFavourite = (productId) => {
    removeFavourite(productId);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text>{item.name}</Text>
      <Button
        title="Remove from Favourites"
        onPress={() => handleRemoveFavourite(item.id)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No favourite items yet.</Text>
      )}
      <Button
        title="Logout"
        onPress={() => navigation.navigate('GettingStarted')}
        style={styles.logoutButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  logoutButton: {
    marginTop: 20,
  },
});

export default FavouritesPage;
