// screens/Subcategories.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContext } from '../context/NavigationContext';

const Subcategories = ({ navigation }) => {
  const { currentCategory, setCurrentSubcategory } =
    useContext(NavigationContext);

  const handleSubcategoryPress = (subcategory) => {
    setCurrentSubcategory(subcategory);
    navigation.navigate('Products');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{currentCategory} Subcategories</Text>
      {/* Example subcategories */}
      <Button title="Casual" onPress={() => handleSubcategoryPress('Casual')} />
      <Button title="Formal" onPress={() => handleSubcategoryPress('Formal')} />
      {/* Add more subcategories based on the category */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Subcategories;
