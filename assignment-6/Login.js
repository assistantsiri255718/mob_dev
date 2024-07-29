import React, { useState } from 'react';
import { View, Text, Button, TextInput, ImageBackground, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Sonal' && password === 'hloo') {
      navigation.navigate('Welcome', { username });
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/504fe44a6949550b86263aecdab1f3fe' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Login" onPress={handleLogin} />
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: 200,
  },
});