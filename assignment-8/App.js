import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FavouritesProvider } from './context/FavouritesContext';  // Correct path
import GettingStarted from './screens/GettingStarted';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Categories from './screens/Categories';
import Subcategories from './screens/Subcategories';
import Products from './screens/Product';
import ProductDetail from './screens/ProductDetail';
import FavouritesPage from './screens/FavouritesPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FavouritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GettingStarted">
          <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ title: 'Sign Up' }} />
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
          <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Categories" component={Categories} options={{ title: 'Categories' }} />
          <Stack.Screen name="Subcategories" component={Subcategories} options={{ title: 'Subcategories' }} />
          <Stack.Screen name="Products" component={Products} options={{ title: 'Products' }} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Product Detail' }} />
          <Stack.Screen name="Favourites" component={FavouritesPage} options={{ title: 'Favourites' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouritesProvider>
  );
};

export default App;
