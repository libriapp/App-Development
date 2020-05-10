import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Prev extends Component {
    state = {
        
    }
    render() {
    return(
        <View style={styles.container}>
            <Text>List Textbooks</Text>
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