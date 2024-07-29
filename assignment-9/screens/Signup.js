import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (username && email && password) {
      try {
        const user = { username, email, password };
        await AsyncStorage.setItem('user', JSON.stringify(user));
        Alert.alert('Success', 'Signup successful');
        navigation.navigate('Login'); // Navigate to Login page after signup
      } catch (error) {
        Alert.alert('Error', 'Failed to save user data');
      }
    } else {
      Alert.alert('Error', 'All fields are required');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/KsT1FYG.jpeg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Sign Up" onPress={handleSignup} />
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

export default SignupPage;
