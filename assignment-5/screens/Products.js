// screens/Products.js
import React from 'react';
import { View, Text, FlatList, SectionList, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import Card from '../components/Card'; // Correct path

const PRODUCTS = [
  { id: '1', name: 'Product 1', price: '$10', imageUrl:''},
  { id: '2', name: 'Product 2', price: '$20', imageUrl: 'https://example.com/path/to/image2.jpg' },
  { id: '3', name: 'Product 3', price: '$30', imageUrl: 'https://example.com/path/to/image3.jpg' },
];

const CATEGORIES = [
  { title: 'Shoes', data: PRODUCTS },
  { title: 'Dresses', data: PRODUCTS },
];

const Products = () => (
  <SafeAreaView style={styles.safeArea}>
    <ImageBackground
      source={{ uri: 'https://example.com/path/to/your/background.jpg' }} // Replace with your actual image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Products</Text>
        <FlatList
          data={PRODUCTS}
          renderItem={({ item }) => <Card product={item} />}
          keyExtractor={item => item.id}
        />
        <SectionList
          sections={CATEGORIES}
          renderItem={({ item }) => <Card product={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Products;
