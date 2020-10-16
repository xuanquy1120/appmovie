import React from 'react'
import {View, Text,Button,TouchableOpacity,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyleSheet from './styles'
 const downloadScreen = ()=>{
    const navigation = useNavigation()

     return (
        <View style={StyleSheet.container}> 
            <Text style={StyleSheet.btnContainer}>
                <TouchableOpacity >
                    <Image source={require('../image/download/9c5980545107d002c2182bee453b1340.png')} style={StyleSheet.image}/>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={StyleSheet.title}>Narcos</Text>
                    <Text style={StyleSheet.text}>4 Episodes | 5.02GB</Text>
                </TouchableOpacity>
            </Text>
            <Text style={StyleSheet.btnContainer}>
                <TouchableOpacity >
                    <Image source={require('../image/download/0f46eff7beb5415c07cfc2d391c8aabb.png')} style={StyleSheet.image}/>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={StyleSheet.title}>Narcos</Text>
                    <Text style={StyleSheet.text}>4 Episodes | 5.02GB</Text>
                </TouchableOpacity>
            </Text>         
        </View>
     )
 }
 export default downloadScreen