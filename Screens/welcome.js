import React from 'react'
import {View, TouchableOpacity, Text, TextInput, StyleSheet, Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config.js'

export default class Welcome extends React.Component{
constructor(){
	super()
	this.state={
	  email: "",
	  password: ""
	}
}

usersignup = (email,password) => {
console.log('signup')
	firebase.auth().createUserWithEmailAndPassword(email,password).then(response=>{return alert("User account is created")}).catch(
		function(error){
			return alert(error.message)
		}
	)
}

userloginin = (email,password) => {
	firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{return alert("User account is created")}).catch(
		function(error){
			return alert(error.message)
		}
	)
}

	render(){
		return(
		<View style={ss.container}>
		  <TextInput placeholder="E mail" keyboardType='email.address' onChangeText={item=>{this.setState({email : item})}} style={ss.inputBox}/>
		  <TextInput placeholder="Password" secureTextEntry={true} onChangeText={item=>{this.setState({password : item})}} style={ss.inputBox}/>
		  <TouchableOpacity style={ss.Button} onPress = {() => {this.userloginin(this.state.email,this.state.password)}}>
		  <Text>Login</Text>
		  </TouchableOpacity>

		  <TouchableOpacity style={ss.Button} onPress = {() => {this.usersignup(this.state.email,this.state.password)}}>
		  <Text>Signin</Text>
		  </TouchableOpacity>
		</View>
		)
	}
}

const ss = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#08b8b8',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  inputBox: {
    marginTop: 25,
    width: '10%',
    alignSelf: 'center',
    height: 40,
    width:300,
    textAlign: 'center',
    borderWidth: 5,
    outline: 'none',
	backgroundColor: '#15199f',
    marginBottom: 50

  },
  Button: {
    width: '20%',
    height: '5%',
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#5155bb',
    justifyContent: 'center',
    alignItems: 'center'
  },
});