import React, { useEffect, useState } from 'react'
import {View, Text, TouchableOpacity , ImageBackground,Image} from 'react-native'
import InputForm from '../../components/input-form'
import LoginButton from '../../components/login-button'
import StyleSheet from '../login-screen/styles'
import { useNavigation } from '@react-navigation/native'
import { AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const LoginScreen = ()=>{
    const [username,setUsername]=React.useState('')
    const [password,setPassword]=React.useState('')
    const navigation = useNavigation()
    let userNameDB =JSON.stringify(
        {
            usernametk:"admin",
            passwordtk:"123456"
        }
    )
    AsyncStorage.setItem('userNameDB',userNameDB) 
const getInputFromUserName=(text)=>{
    setUsername(text)
}
const getInputFromPassword=(text)=>{
    setPassword(text)
}
const toRegister=()=>{
    navigation.navigate('register')  
}
const toLogin = async() =>{ 
    let user = await AsyncStorage.getItem('userNameDB')
    let existedUser = JSON.parse(user);
    console.log(existedUser)
    username===existedUser.usernametk && password===existedUser.passwordtk?
    navigation.navigate('app')   
    : 
    console.log('dang nhap k dung')
}

React.useEffect(() => {
    console.log(username)
},[username])
React.useEffect(() => {   
    console.log(password)
},[password])
     return (
         <View style={StyleSheet.container} > 
            <LinearGradient colors={['white', 'black']} style={StyleSheet.linearGradient}>          
                <ImageBackground source={require('../image/login/Image_1.png')} style={StyleSheet.imageBackGround}>
                <Image style={StyleSheet.imageLogo} source={require('../image/login/1280px-Fox_Movies_(Asia)_logo.svg.png')}/>
                    <InputForm title="Username" onChange={getInputFromUserName} />
                    <InputForm title="Password" onChange={getInputFromPassword} />
                    <LoginButton handleClick={toLogin}/>          
                    <Text style={StyleSheet.title} >Social Logins</Text>
                    <Text style={StyleSheet.title}>Don't have an account?</Text>
                    <View style={StyleSheet.btnContainer}>
                        <TouchableOpacity>
                            <Image source={require('../image/login/Facebook_button.png')} style={StyleSheet.imageLeft}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../image/login/Facebook_button.png')} style={StyleSheet.imageRight}/>
                        </TouchableOpacity>            
                    </View>
                    <TouchableOpacity onPress={toRegister}>
                        <Text style={StyleSheet.title}>REGISTER</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </LinearGradient>
         </View>
     )
 }
 export default LoginScreen