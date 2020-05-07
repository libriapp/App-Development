import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import FlatButton from "../components/FlatButton";
export default class TextbookSearch extends Component {
    state = {
        textbookPrice: '$67.99',
        shippingCost: '$5.00',
        totalCost: '72.99',
        textbookName: 'Campbell Biology (11th Revised Edition)',
    }
    clickHandler = () => {
        this.props.navigation.navigate('Search');
   }
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>Order Confirmed!</Text>
                </View>
                <Image
                    style = {styles.checkPicture}
                    source = {require('../../assets/check5.png')}
                />
                <View style = {styles.receipt}>
                    <Text style = {styles.title}>Receipt:</Text>
                    <Text style = {styles.receiptText}>Thank you for shopping on Libri!</Text>
                    <Text style = {styles.boldText}>Order Details: </Text>
                    <Text style = {styles.receiptText}>Textbook Cost: {this.state.textbookPrice} </Text>
                    <Text style = {styles.receiptText}>Shipping Cost: {this.state.shippingCost} </Text>
                    <Text style = {styles.receiptText}>Total Cost: {this.state.totalCost} </Text>
                    <Text style = {styles.receiptText}>Your order will be shipped within 4-7 buisness days!</Text>
                </View>
                <View style = {styles.backButton}>
                    <FlatButton
                        text = 'Back to Home'
                        onPress = {this.clickHandler}
                    />
                </View>
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
    checkPicture: {
        marginTop: 0,
        width: 310,
        height:310,
        marginBottom: 0,
    },
    receipt: {
        width: 330,
        height: 330,
        borderWidth: 3,
        borderColor: 'white',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 40,
        marginTop: 10,
    },
    boldText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 25,
        marginTop: 10,
    },
    receiptText: {
        color: '#FFF',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 12,
    },
    backButton: {
        marginTop: 20,
        width: 320,
    }
});