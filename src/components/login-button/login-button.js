import React from 'react'
import { View,Button} from 'react-native'
import styles from './styles'
 const loginButton = (props)=>{
     return (
         <View style={styles.container}> 
            <Button onPress={props.handleClick} title="login" color="#daa520"/>
         </View>
     )
 }

 export default loginButton