import React from 'react'
import {View, Text,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
 const searchScreen = ()=>{
    const navigation = useNavigation()

     return (
         <View > 
            <Text>
                find
            </Text>
         </View>
     )
 }
 export default searchScreen