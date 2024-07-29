// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoriteProvider } from './FavoriteContext';
import ProductScreen from './ProductScreen';
import FavoriteScreen from './FavoriteScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Products">
          <Stack.Screen name="Products" component={ProductScreen} />
          <Stack.Screen name="Favorites" component={FavoriteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}