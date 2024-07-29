import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const GettingStarted = ({ navigation }) => {
  return (
    <ImageBackground source={require('../test9.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.text}>"Style is a way to say who you are without having to speak"</Text>
        <Button title="Get Started" onPress={() => navigation.navigate('Signup')} />
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

export default GettingStarted;
