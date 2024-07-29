import React, { useState } from 'react';
import { View, Text, Button, Switch, StyleSheet, ImageBackground } from 'react-native';

export default function Welcome({ route, navigation }) {
  const { username } = route.params;
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c6c9cca2880550c5794e1068ad0c4d46' }} style={styles.background}>
      <View style={[styles.container, { backgroundColor: isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' }]}>
        <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>Welcome, {username}!</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        <Button title="View Products" onPress={() => navigation.navigate('Products')} />
        <Button title="Logout" onPress={() => navigation.navigate('GettingStarted')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});