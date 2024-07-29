import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeComponent = ({ username, onLogout, onGoToProducts }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome, {username}</Text>
    <Button title="Go to Products" onPress={onGoToProducts} />
    <Button title="Log Out" onPress={onLogout} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WelcomeComponent;
