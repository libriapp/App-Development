import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen'
import TextbookSearch from './src/screens/TextbookSearch';
import AccountInfo from './src/screens/AccountInfo';
import TextbookInfo from './src/screens/TextbookInfo';
import OrderConfirmed from './src/screens/OrderConfirmed';
import PreviousOrders from './src/screens/PreviousOrders';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
           <Stack.Screen name="Login" component={LoginScreen} />
           <Stack.Screen name="Search" component={TextbookSearch}/>
            <Stack.Screen name="TextbookInfo" component={TextbookInfo} />
            <Stack.Screen name="AccountInfo" component={AccountInfo} />
            <Stack.Screen name="Confirmed" component={OrderConfirmed} />
            <Stack.Screen name="Prev" component={PreviousOrders} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App