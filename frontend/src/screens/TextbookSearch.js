import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
export default class TextbookSearch extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text>Textbook Search Page</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EA6E6E',
      alignItems: 'center',
      justifyContent: 'center',
    },
});