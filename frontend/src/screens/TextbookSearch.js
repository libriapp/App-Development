import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import FlatButton from "../components/FlatButton";
import TextbookButton from "../components/TextbookButton";
export default class TextbookSearch extends Component {
    state = {
        textbooks : [
        {name:'  5 Steps to a 5: AP Calculus AB 2020', key: 1},
        {name:'  Campbell Biology 11th edition', key: 2},  
        {name:'  General Chemistry', key: 3}, 
        {name:'  Physics: Principles with Applications', key: 4},
        {name:'  College Algebra (5th Edition)', key: 5},  
        {name:'  The Art of Public Speaking', key: 6}, 
        {name:'  Principles of Instrumental Analysis', key: 7},
        {name:'  A Writer’s Reference', key: 8},  
        {name:'  Biological Science with MasteringBiology', key: 9}, 
        {name:'  Atlas of Human Anatomy: with Student Consult Access', key: 10},
        ],
        search : '',
    }
    clickHandler = () => {
        this.props.navigation.navigate('TextbookInfo');
   }
    clickHandler2 = () => {
        this.props.navigation.navigate('Prev');
    }
    clickHandler3 = () => {
        this.props.navigation.navigate('List');
    }
    onChangeText = (stateObject, text) => {
        this.setState({
            [stateObject]: text,
        });
    };
    render() {
        return(
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.container}>
                    <View style = {styles.header}>
                        <Text style = {styles.headerText}>Libri Home</Text>
                    </View>
                    <View style = {styles.inputContainer}>
                        <TextInput
                            placeholder = "Search..."
                            placeholderTextColor = "rgba(255,255,255,0.7)"
                            returnKeyType = "Search"
                            style = {styles.input}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            onChangeText={(text) => this.onChangeText('search', text)}
                        /> 
                    </View>
                    {
                        this.state.textbooks.map(textbook => {
                            if (textbook.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > 0) {
                                return (
                                    <View style = {styles.textbookButton}>
                                        <TextbookButton
                                            text = {textbook.name}
                                            onPress = {this.clickHandler}
                                        />
                                    </View>
                                )
                            }
                        })
                    }
                    <View style = {styles.rows}>
                        <View style = {styles.listButton}>
                            <FlatButton
                                text = "List Textbooks"
                                onPress = {this.clickHandler3}
                            />
                        </View>
                        <View style = {styles.prevButton}>
                            <FlatButton
                                text = "Previous Orders"
                                onPress = {this.clickHandler2}
                            />
                        </View>
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
    rows: {
        marginTop: 40,
        flexDirection: 'row',
    },
    textbookButton: {
        marginTop: 0,
        marginBottom: 5,
        width: 350,

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
    listButton: {
        marginTop: 0,
        marginBottom: 10,
        marginRight: 10,
    },
    prevButton: {
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 10,
    },
    inputContainer: {
        marginTop: 50,
    },
    input: {
        height: 42,
        width: 350,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10,
        fontSize: 18,
        marginTop:0,
    },
    
});