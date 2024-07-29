import React, { useState } from 'react';
import { View, Text, Button, TextInput, ImageBackground, StyleSheet } from 'react-native';

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    if (username === 'Sanjana' && password === 'hloo'&& email==='san@111') {
      navigation.navigate('Welcome', { username });
    } else {
      alert('Invalid username or password');
    }
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9dfc4f5743dbb2a7bdea6bf20df8e8a7' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Sign Up</Text>
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
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Button title="Sign Up" onPress={handleSignUp} />
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