import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { FavouritesProvider } from './context/FavouritesContext';
import GettingStarted from './screens/GettingStarted';
import SignupPage from './screens/Signup';
import LoginPage from './screens/Login';
import WelcomePage from './screens/Welcome';
import ProductPage from './screens/Product';
import FavouritesPage from './screens/FavouritesPage';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Products" 
      component={ProductPage} 
      options={({ navigation }) => ({
        title: 'Products',
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          />
        ),
      })} 
    />
  </Stack.Navigator>
);

const FavouritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Favourites" 
      component={FavouritesPage} 
      options={({ navigation }) => ({
        title: 'Favourites',
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
          />
        ),
      })} 
    />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Welcome">
    <Drawer.Screen name="Welcome" component={WelcomePage} />
    <Drawer.Screen name="Products" component={ProductStack} />
    <Drawer.Screen name="Favourites" component={FavouritesStack} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <FavouritesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GettingStarted">
          <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Welcome" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouritesProvider>
  );
};

export default App;
