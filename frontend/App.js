import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen'
import TextbookSearch from './src/screens/TextbookSearch';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Search" component={TextbookSearch} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App