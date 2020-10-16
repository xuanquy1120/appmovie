import React from 'react'
import {View, Text,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

 const movieDetails = ()=>{
    const navigation = useNavigation()

     return (
         <View > 
            <Text>
                MOVIE DETAILS
            </Text>
         </View>
     )
 }
 export default movieDetails