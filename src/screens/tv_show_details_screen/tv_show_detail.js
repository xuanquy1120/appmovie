import React from 'react'
import {View, Text,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
 const tvShowDetails = ()=>{
    const navigation = useNavigation()

     return (
         <View > 
            <Text>
                TV SHOW DETAILS
            </Text>
         </View>
     )
 }
 export default tvShowDetails