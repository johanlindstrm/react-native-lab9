import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Products from './screens/Products';
import ShoppingCart from './screens/ShoppingCart';
import { store } from './redux/store';
import ThemeContextProvider from './context/ThemeContext.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Products">
            <Stack.Screen
              name="Products"
              component={Products}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Button
                    title="View Cart"
                    onPress={() => navigation.navigate('Shopping Cart')}
                  />
                ),
              })}
            />
            <Stack.Screen name="Shopping Cart" component={ShoppingCart} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeContextProvider>
  );
}
