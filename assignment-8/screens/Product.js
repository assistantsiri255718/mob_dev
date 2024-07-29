import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity,  } from 'react-native';
import { useFavourites } from '../context/FavouritesContext'; // Ensure this path is correct
import { Ionicons } from '@expo/vector-icons';

const categories = ['Shirts', 'Shoes', 'Sarees', ];
const subcategories = {
  Shirts: ['Shirts', 'Tshirts'],
  Shoes: ['Sneakers', 'Boots'],
  Sarees: ['Cotton', 'Chiffon'],
  
};
const products = [
  { id: '1', category: 'Shirts', subcategory: 'Shirts', name: 'Shirt 1', imageUrl: 'https://i.imgur.com/gPev7ET.jpeg' },
  { id: '2', category: 'Shirts', subcategory: 'Shirts', name: 'Shirt 2', imageUrl: 'https://i.imgur.com/6RMtEdK.jpeg' },
   { id: '3', category: 'Shirts', subcategory: 'Shirts', name: 'Shirt 3', imageUrl: 'https://i.imgur.com/Vc00j5v.png' },
  { id: '4', category: 'Shirts', subcategory: 'Tshirts', name: 'Shirt 4', imageUrl: 'https://i.imgur.com/UhmmuA2.jpeg' },
  { id: '5', category: 'Shirts', subcategory: 'Tshirts', name: 'Shirt 5', imageUrl: 'https://i.imgur.com/VQURtg6.jpeg' },
  { id: '6', category: 'Shirts', subcategory: 'Tshirts', name: 'Shirt 6', imageUrl: 'https://i.imgur.com/yZontww.jpeg' },
  { id: '7', category: 'Shoes', subcategory: 'Sneakers', name: 'Shoes 7', imageUrl: 'https://i.imgur.com/kL3Qeop.jpeg' },
  { id: '8', category: 'Shoes', subcategory: 'Sneakers', name: 'Shoes 8', imageUrl: 'https://i.imgur.com/BaIxIxQ.jpeg' },
  { id: '9', category: 'Shoes', subcategory: 'Sneakers', name: 'Shoes 9', imageUrl: 'https://i.imgur.com/pDpuxm6.jpeg' },
  { id: '10', category: 'Shoes', subcategory: 'Boots', name: 'Shoes 10', imageUrl: 'https://i.imgur.com/DPFDVJn.png' },
   { id: '11', category: 'Shoes', subcategory: 'Boots', name: 'Shoes 11', imageUrl: 'https://i.imgur.com/L9xJAuU.jpeg' },
  { id: '12', category: 'Sarees', subcategory: 'Cotton', name: 'Sarees 12', imageUrl: 'https://i.imgur.com/20g2gwB.jpeg' },
  { id: '13', category: 'Sarees', subcategory: 'Cotton', name: 'Sarees 13', imageUrl: 'https://i.imgur.com/HcSuvJT.jpeg' },
  { id: '14', category: 'Sarees', subcategory: 'Cotton', name: 'Sarees 14', imageUrl: 'https://i.imgur.com/AS99Zsf.jpeg' },
  { id: '15', category: 'Sarees', subcategory: 'Chiffon', name: 'Sarees 15', imageUrl: 'https://i.imgur.com/B6UVfpP.jpeg' },
  { id: '16', category: 'Sarees', subcategory: 'Chiffon', name: 'Sarees 16', imageUrl: 'https://i.imgur.com/OKo6YfG.jpeg' },

];

const ProductPage = ({ navigation }) => {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleFavouriteToggle = (product) => {
    if (favourites.some((fav) => fav.id === product.id)) {
      removeFavourite(product.id);
    } else {
      addFavourite(product);
    }
  };

  const renderCategoryItem = (category) => (
    <TouchableOpacity
      key={category}
      style={styles.categoryButton}
      onPress={() => {
        setSelectedCategory(category);
        setSelectedSubcategory(null); // Reset subcategory
      }}
    >
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );

  const renderSubcategoryItem = (subcategory) => (
    <TouchableOpacity
      key={subcategory}
      style={styles.subcategoryButton}
      onPress={() => setSelectedSubcategory(subcategory)}
    >
      <Text style={styles.subcategoryText}>{subcategory}</Text>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }) => {
    if (item.category !== selectedCategory || item.subcategory !== selectedSubcategory) return null;
    const isFavourite = favourites.some((fav) => fav.id === item.id);
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.productName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.favouriteButton}
          onPress={() => handleFavouriteToggle(item)}
        >
          <Ionicons
            name={isFavourite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavourite ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {selectedCategory && (
          <TouchableOpacity
            onPress={() => setSelectedCategory(null)}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>
          {selectedCategory ? selectedCategory : 'Categories'}
        </Text>
      </View>
      {selectedCategory === null ? (
        <ScrollView horizontal style={styles.categoryScroll}>
          {categories.map(renderCategoryItem)}
        </ScrollView>
      ) : (
        <ScrollView horizontal style={styles.subcategoryScroll}>
          {subcategories[selectedCategory].map(renderSubcategoryItem)}
        </ScrollView>
      )}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('GettingStarted')}
          style={styles.logoutButton}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ddd',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryScroll: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#ddd',
  },
  subcategoryScroll: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#ddd',
  },
  categoryButton: {
    marginHorizontal: 10,
  },
  subcategoryButton: {
    marginHorizontal: 10,
  },
  categoryText: {
    fontSize: 18,
  },
  subcategoryText: {
    fontSize: 16,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
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
    marginBottom: 10,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 18,
    marginBottom: 10,
  },
  favouriteButton: {
    alignSelf: 'flex-end',
  },
  logoutContainer: {
    margin: 20,
  },
  logoutButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProductPage;
