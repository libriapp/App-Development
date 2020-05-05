import React, {Component, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert } from 'react-native';
export default class LoginScreen extends Component {
    state = {
        username: 'q',
        password: 'q',
        email: 'q',
        inputUsername: '',
        inputPassword:'',
    }
    onChangeText = (stateObject, text) => {
        this.setState({
            [stateObject]: text,
        });
    };
    clickHandler = () => {
           if ((this.state.inputUsername == this.state.username) && (this.state.inputPassword == this.state.password)) {
            this.props.navigation.navigate('Search');
           }
           else if ((this.state.inputUsername == this.state.email) && (this.state.inputPassword == this.state.password)) {
            this.props.navigation.navigate('Search');
           }
           else {
            Alert.alert('OOPS', 'Incorrect Username or Password', [
                {text: 'Try Again', onPress: () => console.log('alert closed')}
            ]);
        }
    }
render () {
   return (
    <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>Libri Textbooks</Text>
            </View>
            <View style = {styles.logoContainer}>
                <Image
                style = {styles.logo}
                source = {require('../../assets/libriLogo.png')}
                />
                <Text style = {styles.title}>Buy or Sell your College Textbooks!</Text>
            </View>
            <View style = {styles.formContainer}>
                <StatusBar
                    barStyle = 'light-content'
                />
                <TextInput
                    placeholder = "Username or Email"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    keyboardType = 'email-address'
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    style = {styles.input}
                    onChangeText={(text) => this.onChangeText('inputUsername', text)}
                /> 
                <TextInput
                    placeholder = "Password"
                    placeholderTextColor = "rgba(255,255,255,0.7)"
                    returnKeyType = "Go"
                    secureTextEntry
                    style = {styles.input}
                    ref = {(input) => this.passwordInput = input}
                    onChangeText={(text) => this.onChangeText('inputPassword', text)}
                /> 
                <TouchableOpacity style =  {styles.buttonContainer}>
                    <Button
                        style = {styles.buttonText}
                        title = 'Login'
                        onPress = {this.clickHandler}
                        color = '#DA3A3A'
                    />
                </TouchableOpacity>
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
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 60,
  },
  logo: {
      width: 200,
      height:240,
  },
  title: {
      color: '#FFF',
      marginTop: 0,
      fontSize: 20,
      textAlign: 'center',
      opacity: 0.9,
  },
  header: {
    textAlign: 'center',
    marginTop: 40,
  },
  headerText: {
      fontWeight: 'bold',
      color: '#FFF',
      fontSize: 50,
  },
  input: {
    height: 50,
    width: 350,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    marginTop:0,
    },
    buttonContainer: {
        marginBottom: 30,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 17,
    },  
});
