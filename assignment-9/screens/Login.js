import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.username === username && user.password === password) {
          navigation.navigate('Welcome'); // Navigate to Welcome page
        } else {
          Alert.alert('Error', 'Invalid username or password');
        }
      } else {
        Alert.alert('Error', 'No user found. Please sign up.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve user data');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/21EYT4G.jpeg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
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
    width: '100%',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default LoginPage;
