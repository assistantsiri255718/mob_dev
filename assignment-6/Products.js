import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductPage = ({ route, navigation }) => {
  const { username } = route.params || {};


  const PRODUCTS = [
    { id: '1', name: 'Product 1', imageUrl: 'https://i.imgur.com/Beu0DJz.jpeg' },
    { id: '2', name: 'Product 2', imageUrl: 'https://i.imgur.com/fnj6u8q.png' },
    { id: '3', name: 'Product 3', imageUrl: 'https://i.imgur.com/lHAyrC1.jpeg' },
  ];

  const handleToggleFavourite = (product) => {
    if (isFavourite(product)) {
      removeFavourite(product);
    } else {
      addFavourite(product);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Welcome, {username}</Text>
        <Button title="Log Out" onPress={() => navigation.navigate('GettingStarted')} />
      </View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => handleToggleFavourite(item)}>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  card: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default ProductPage;
