import React from 'react'
import {View, Text,Button} from 'react-native'
import InputForm from '../../components/input-form'
import { useNavigation } from '@react-navigation/native'


const registerScreen = ()=>{
    const [username,setUsername]=React.useState('')
    const [password,setPassword]=React.useState('')
    const navigation = useNavigation()
const getInputFromUserName=(text)=>{
    setUsername(text)
}
const getInputFromPassword=(text)=>{
    setPassword(text)
}
const tologin=()=>{
    navigation.navigate('login')  
}
     return (
         <View>
            <Text>Trang dang ky</Text>
            <InputForm title="Username" onChange={getInputFromUserName}/>
            <InputForm title="Password" onChange={getInputFromPassword}/>
            <Button title="register" onPress={tologin}/> 
         </View>
     )
 }
 export default registerScreen