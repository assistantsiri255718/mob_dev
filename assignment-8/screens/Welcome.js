import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const WelcomePage = ({ navigation, route }) => {
  const { username } = route.params;

  return (
    <ImageBackground source={require('../test14.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.text}>"Welcome", {username}!</Text>
        <Button title="Go to Products" onPress={() => navigation.navigate('Products')} />
        <Button title="Go to Favourites" onPress={() => navigation.navigate('Favourites')} />
        <Button title="Logout" onPress={() => navigation.navigate('GettingStarted')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WelcomePage;
