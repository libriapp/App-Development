import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
export default class AcountInfo extends Component {
    state = {
        email: '',
        phoneNumber: '',
        address: '',
        creditCard: '',
        zipCode: '',
        state: '',
        expirationDate: '',
        cvv: '',
        textbookName: 'Campbell Biology 11th Edition',
        textbookPrice: '$31.99',
        empty:'',

    }
    onChangeText = (stateObject, text) => {
        this.setState({
            [stateObject]: text,
        });
    };
    clickHandler = () => {
        if ((this.state.email !== this.state.empty) && (this.state.phoneNumber !== this.state.empty) && (this.state.address !== this.state.empty)&& (this.state.creditCard !== this.state.empty)&& (this.state.zipCode !== this.state.empty)&& (this.state.state !== this.state.empty)&& (this.state.expirationDate !== this.state.empty)&& (this.state.cvv !== this.state.empty)) {
         this.props.navigation.navigate('Search');
        }
        else {
         Alert.alert('Missing Field', 'Please fill out all fields', [
             {text: 'Try Again', onPress: () => console.log('alert closed')}
         ]);
     }
    }
    render() {
        return(
        <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
            <View style = {styles.container}>
                <View style = {styles.textbookInfo}>
                    <Text style = {styles.orderDetails}>Order Details:</Text>
                    <Image
                    style = {styles.textbookPic}
                    source = {require('../../assets/textbookPicture.jpg')}
                    />
                    <Text style = {styles.textbookText}>Name: {this.state.textbookName}</Text>
                    <Text style = {styles.textbookText}>Price: {this.state.textbookPrice}</Text>
                </View>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>Account Information</Text>
                </View>
                <TextInput
                    placeholder = "Email"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    keyboardType = 'email-address'
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input}
                    onChangeText={(text) => this.onChangeText('email', text)}
                /> 
                <TextInput
                    placeholder = "Phone Number"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input}
                    onChangeText={(text) => this.onChangeText('phoneNumber', text)}
                /> 
                <TextInput
                    placeholder = "Address"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input}
                    onChangeText={(text) => this.onChangeText('address', text)}
                /> 
            <View style = {styles.smallInputContainer}>
                <TextInput
                    placeholder = "Zip Code"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input2}
                    onChangeText={(text) => this.onChangeText('zipCode', text)}
                /> 
                <TextInput
                    placeholder = "State"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input2}
                    onChangeText={(text) => this.onChangeText('state', text)}
                /> 
            </View>
                <TextInput
                    placeholder = "Credit Card Number"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input}
                    onChangeText={(text) => this.onChangeText('creditCard', text)}
                /> 
            <View style = {styles.smallInputContainer}>
                <TextInput
                    placeholder = "Expiration Date"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input2}
                    onChangeText={(text) => this.onChangeText('expirationDate', text)}
                /> 
                <TextInput
                    placeholder = "CVV"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input2}
                    onChangeText={(text) => this.onChangeText('cvv', text)}
                /> 
            </View>
                <View style = {styles.buttonContainer}>
                    <Button
                        style = {styles.buttonText}
                        title = 'Checkout'
                        onPress = {this.clickHandler}
                        color = '#DA3A3A'
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
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
    header: {
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 30,
      },
    headerText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 40,
      },
    textbookText: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 10,
    },
    orderDetails: {
        marginTop: 2,
        marginLeft: 10,
        marginBottom:5,
        fontSize: 23,
        fontWeight: 'bold',
        color: '#FFF',
    },
    textbookInfo: {
        marginTop: 20,
        width: 330,
        height: 240,
        borderWidth: 3,
        borderColor: 'white',
        marginBottom: 20,
    },
    textbookPic: {
        marginLeft: 10,
        marginTop: 5,
        width: 100,
        height:140,
        marginBottom: 10,
    },
    input: {
        height: 45,
        width: 350,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10,
        fontSize: 18,
        marginTop:0,
    },
    input2: {
        height: 45,
        width: 165,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10,
        fontSize: 18,
        marginTop:0,
        marginRight: 10,
        marginLeft: 10,
    },
    smallInputContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        height: 40,
        width: 350,
        marginTop: 20,
        marginBottom: 30,
    },
    textbookInfoContainer: {

    }
});