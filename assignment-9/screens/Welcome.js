import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Shopping App!</Text>
      <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
      <Button title="Go to Favourites" onPress={() => navigation.navigate('Favourites')} />
      <Button title="Logout" onPress={() => navigation.navigate('GettingStarted')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WelcomePage;
