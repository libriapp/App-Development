import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Prev extends Component {
    state = {
        textbookName: 'Campbell Biology (11th Revised Edition)',
    }
    render() {
    return(
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>Previous Orders</Text>
            </View>
            <View style= {styles.rows}>
                <View style = {styles.leftColumn}>
                    <Text style={styles.bold}>Name:</Text>
                        <Text style={styles.textbookName}>{this.state.textbookName}</Text>
                </View>
                <View style={styles.rightColumn}>
                    <Image
                    style = {styles.textbookPic}
                    source={require ("../../assets/textbookPicture.jpg")}
                    />
                </View>
            </View>
        </View>
        );
    }
}

    const styles = StyleSheet.create({

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

        container: {
            flex: 1,
            backgroundColor: '#EA6E6E',
            alignItems: 'center',
            justifyContent: 'center',
        },

        rows: {
            flexDirection: 'row',
            borderWidth: 3,
            borderColor: 'white',
        },

        leftColumn: {
            marginLeft: 4,
            flexDirection: 'column',
            width: 200,
            height: 265,
           
        },

        bold: {
            marginLeft: 5,
            fontWeight: 'bold',
            color: '#FFF',
            marginTop: 5,
            fontSize: 18,
            marginBottom: 2,
        },

        textbookName: {
            marginLeft: 5,
            fontSize: 18,
            color: '#FFF',
        },

        rightColumn: {
            flexDirection: 'column',
           
        },

        textbookPic: {
            marginLeft: 20,
            marginTop: 0,
            width: 180,
            height:240,
            marginBottom: 0,
        },
    });