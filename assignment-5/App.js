import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList, Image, ScrollView, SafeAreaView, Switch, ImageBackground } from 'react-native';

// Component to display product cards
const Card = ({ product, onAddToFavourites }) => (
  <View style={styles.card}>
    <Image source={{ uri: product.imageUrl }} style={styles.image} />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>{product.price}</Text>
    <Button title="Add to Favourites" onPress={() => onAddToFavourites(product)} />
  </View>
);

// Component for Getting Started page
const GettingStarted = ({ onStart }) => (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={ require ('./test9.jpg')} style={styles.backgroundImage}>
      <Text style={styles.title}>Getting Started</Text>
      <Button title="Get Started" onPress={onStart} />
    </ImageBackground>
  </SafeAreaView>
);

// Component for Signup page
const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require ('./test10.webp')} style={styles.backgroundImage}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
        <Button title="Sign Up" onPress={() => onSignup(username)} />
      </ImageBackground>
    </SafeAreaView>
  );
};

// Component for Login page
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require ('./test8.jpeg')} style={styles.backgroundImage}>
        <Text style={styles.title}>Login</Text>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
        <Button title="Login" onPress={() => onLogin(username)} />
      </ImageBackground>
    </SafeAreaView>
  );
};

// Component for Welcome page
const Welcome = ({ username, onLogout, onGoToProduct }) => (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={require ('./test14.jpg')} style={ styles.backgroundImage}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Button title="Go to Products" onPress={onGoToProduct} />
      <Button title="Logout" onPress={onLogout} />
    </ImageBackground>
  </SafeAreaView>
);

// Component for Product page
const Product = ({ username, onAddToFavourites, onLogout }) => {
  const products = [
    { id: '1', name: 'Product 1', price: '$10', imageUrl: 'https://i.imgur.com/Beu0DJz.jpeg'},
    { id: '2', name: 'Product 2', price: '$20', imageUrl: 'https://i.imgur.com/fnj6u8q.png'},
    { id: '3', name: 'Product 3', price: '$40', imageUrl: 'https://i.imgur.com/lHAyrC1.jpeg'},

    // Add more products as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Products for {username}</Text>
        {products.map(product => (
          <Card key={product.id} product={product} onAddToFavourites={onAddToFavourites} />
        ))}
        <Button title="Logout" onPress={onLogout} />
      </ScrollView>
    </SafeAreaView>
  );
};

// Main App component
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('GettingStarted');
  const [username, setUsername] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSignup = (user) => {
    setUsername(user);
    setCurrentScreen('Login');
  };

  const handleLogin = (user) => {
    setUsername(user);
    setCurrentScreen('Welcome');
  };

  const handleLogout = () => {
    setUsername('');
    setFavourites([]);
    setCurrentScreen('GettingStarted');
  };

  const handleGoToProduct = () => {
    setCurrentScreen('Product');
  };

  const handleAddToFavourites = (product) => {
    setFavourites([...favourites, product]);
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const backgroundColor = isDarkMode ? '#333' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        style={styles.switch}
      />
      {currentScreen === 'GettingStarted' && (
        <GettingStarted onStart={() => setCurrentScreen('Signup')} />
      )}
      {currentScreen === 'Signup' && (
        <Signup onSignup={handleSignup} />
      )}
      {currentScreen === 'Login' && (
        <Login onLogin={handleLogin} />
      )}
      {currentScreen === 'Welcome' && (
        <Welcome username={username} onLogout={handleLogout} onGoToProduct={handleGoToProduct} />
      )}
      {currentScreen === 'Product' && (
        <Product username={username} onAddToFavourites={handleAddToFavourites} onLogout={handleLogout} />
      )}
    </SafeAreaView>
  );
};

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
  card: {
    padding: 10,
    margin: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 150,
  },
  name: {
    fontSize: 18,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  backgroundImage: {
    flex: 1,
    width: '200%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    marginBottom: 20,
  },
});

export default App;
