import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import FlatButton from "../components/FlatButton";

export default class App extends Component {
    state = {
        textbookName: 'Campbell Biology (11th Revised Edition)',
        textbookAuthors: 'Jane Reece, Lisa A. Urry, Peter V. Minorsky, Steven A. Wasserman, Michael L. Cain',
        textbookDescription: 'For the last three decades, Campbell Biology has been the leading college text in the biological sciences. It has been translated into 19 languages and has provided millions of students with a solid foundation in college-level biology. This success is a testament not only to Neil Campbellsoriginal vision but also to the dedication of hundreds of reviewers (listed on pages xxviii-xxxi), who, together with editors, artists, and contributors, have shaped and inspired this work',
        textbookCondition: 'Slightly Used. No ripped pages. A couple of scratches on the cover.',
        textbookBuyPrice: '$67.99',
        textbookRentPrice: '$20.99 per year',
    }
    clickHandler1 = () => {
        this.props.navigation.navigate('AccountInfo');
    }
    clickHandler2 = () => {
         this.props.navigation.navigate('Search');
    }
  render () {
  return (
    <View style={styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}>Textbook Information</Text>
        </View>
        <View style= {styles.rows}>
            <View style = {styles.leftColumn}>    
                    <View style={styles.nameAuthor}>
                        <Text style={styles.bold}>Name:</Text>
                        <Text style={styles.textbookName}>{this.state.textbookName}</Text>
                        <Text style={styles.bold}>Authors:</Text>
                        <Text style={styles.textbookAuthors}>{this.state.textbookAuthors}</Text>
                        <Text style={styles.bold}>Condition:</Text>
                        <Text style={styles.textbookCondition}>{this.state.textbookCondition}</Text>
                    </View>
            </View>
            <View style={styles.rightColumn}>
                    <Image
                    style = {styles.textbookPic}
                    source={require ("../../assets/textbookPic.jpg")}
                    />
            </View>
        </View>
                    <Text style={styles.bold}>Description:                                                                   </Text>
                    <Text style={styles.textbookDescription}>{this.state.textbookDescription}</Text>
                    <View style = {styles.transactionBorder}>
                        <Text style={styles.transactionOptionsText}>How would you like to purchase this textbook?</Text>
                        <View style = {styles.rows2}>
                            <View style = {styles.column1}>
                                <View style={styles.backButton}>
                                <Text></Text>
                                    <View style = {styles.rentButton}>
                                        <FlatButton
                                        text = 'Back'
                                        onPress = {this.clickHandler2}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style = {styles.column2}>
                                <View style={styles.buyRent}>
                                    <Text style = {styles.priceText}>{this.state.textbookRentPrice}</Text>
                                    <View style = {styles.rentButton}>
                                        <FlatButton
                                        text = 'Rent'
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style = {styles.column3}>
                                <View style={styles.buyRent}>
                                    <Text style = {styles.priceText2}>{this.state.textbookBuyPrice}</Text>
                                    <View style = {styles.buyButton}>
                                        <FlatButton
                                        text = 'Buy'
                                        onPress = {this.clickHandler1}
                                        />
                                    </View>
                                </View>
                            </View>
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
},
rows2: {
    flexDirection: 'row',

},
rightColumn: {
    flexDirection: 'column',
},

leftColumn: {
    marginLeft: 4,
    flexDirection: 'column',
    width: 200,
    height: 265,
},
column1: {
    marginTop: 18,
    flexDirection: 'column',
    marginRight: 30,
},
column2: {
    marginTop: 18,
    flexDirection: 'column',
},
column3: {
    marginTop: 18,
    flexDirection: 'column',
},
priceText: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 22,
    marginBottom: 20,
    marginRight: 20,
},
priceText2: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 22,
    marginBottom: 20,
    marginLeft: 15,
},
bold: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 5,
    fontSize: 18,
    marginBottom: 2,
},
textbookAuthors: {
    marginLeft: 5,
    fontSize: 16,
    color: '#FFF',
    
},
textbookCondition: {
    marginLeft: 5,
    fontSize: 16,
    color: '#FFF',

},
textbookDescription: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
},
textbookName: {
    marginLeft: 5,
    fontSize: 18,
    color: '#FFF',
},
textbookPic: {
    marginLeft: 20,
    marginTop: 0,
    width: 180,
    height:240,
    marginBottom: 0,
},
transactionBorder: {
    marginTop: 5,
    borderTopColor: '#FFF',
    borderTopWidth: 3,
},
transactionOptionsText: {
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: "center",
},


textbookPrice: {
    flex: 1,
    alignItems: 'center',
},

    backButton: {
        width: 100,
        marginTop: 42,
        marginRight:10
    },
    rentButton: {
        width: 100,
        marginLeft:10,
    },
    buyButton: {
        width: 100,
        marginRight: 5,
    },

});