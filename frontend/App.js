import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar, Button, Alert  } from 'react-native';
export default function App() {
        const [username, setUsername] = useState('libriapp1');
        const [password, setPassword] = useState('Libri123!');
        const [email, setEmail] = useState('libriapp1@gmail.com');
        const [inputUsername, setInputUsername] = useState('');
        const [inputPassword, setInputPassword] = useState('');
        const clickHandler = () => {
           if ((inputUsername == username) && (inputPassword == password)) {
            //navigation to next screen
           }
           else if ((inputUsername == email) && (inputPassword == password)) {
            //navigation to next screen
           }
           else {
            Alert.alert('OOPS', 'Incorrect Username or Password', [
                {text: 'Try Again', onPress: () => console.log('alert closed')}
            ]);
           }
       }
  return (
    <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
     <View style={styles.container}>
         <View style = {styles.header}>
             <Text style = {styles.headerText}>Libri Textbooks</Text>
         </View>
         <View style = {styles.logoContainer}>
            <Image
             style = {styles.logo}
             source = {require('./assets/logoFiller.png')}
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
            keyboardType = 'email-address'
            autoCapitalize = "none"
            autoCorrect = {false}
            style = {styles.input}
            onChangeText = {(val) => setInputUsername(val)}
            /> 
            <TextInput
            placeholder = "Password"
            placeholderTextColor = "rgba(255,255,255,0.7)"
            returnKeyTypre = "Go"
            secureTextEntry
            style = {styles.input}
            onChangeText = {(val) => setInputPassword(val)}
            /> 
            <TouchableOpacity style =  {styles.buttonContainer}>
                <Button
                style = {styles.buttonText}
                title = 'Login'
                onPress = {clickHandler}
                size 
                color = '#DA3A3A'
                />
            </TouchableOpacity>
        </View>
     </View>
     </KeyboardAvoidingView>
  );
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
    marginBottom: 40,
  },
  logo: {
      width: 150,
      height:130,
  },
  title: {
      color: '#FFF',
      marginTop: 20,
      fontSize: 20,
      textAlign: 'center',
      opacity: 0.9,
  },
  header: {
    textAlign: 'center',
    marginTop: 50,
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
      marginBottom: 40,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 17,
    },  
});