import React from 'react'
import { View, Text, Button, Image ,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import StyleSheet from '../profile_screen/styles'
const proFileScreen = () => {
    const navigation = useNavigation()
    const backLogin = () => {
        navigation.navigate('login')
    }
    return (
        <View style={StyleSheet.container}>
            {/* <Button title="back login" onPress={backLogin}/> */}
            <View style={StyleSheet.btnContainer}>
                <Image source={require('../image/profile/38917570_1119506794863647_8083621569152155648_n.jpg')} style={StyleSheet.imgAvatar} />
            </View>
            <View style={StyleSheet.btn}>
                <Text style={StyleSheet.nameUser}>Nguyễn Xuân Quý</Text>
                <Text style={StyleSheet.Premium}>Premium</Text>

                <Text style={StyleSheet.row}>
                    <Icon name='person' type='Octicons' color='rgba(255,255,255,0.75)' />
                    <TouchableOpacity >
                        <Text style={StyleSheet.title}>Account</Text>
                    </TouchableOpacity>
                </Text>
                <Text style={StyleSheet.row}>
                <Icon name='notifications' type='Ionicons' color='rgba(255,255,255,0.75)' />
                    <TouchableOpacity >
                        <Text style={StyleSheet.title}>Notifications</Text>
                    </TouchableOpacity>
                </Text>
                <Text style={StyleSheet.row}>
                <Icon name='settings' type='Feather' color='rgba(255,255,255,0.75)' />
                    <TouchableOpacity >
                        <Text style={StyleSheet.title}>Settings</Text>
                    </TouchableOpacity>
                </Text>
                <Text style={StyleSheet.row}>
                <Icon name='help' type='Entypo' color='rgba(255,255,255,0.75)'/>
                    <TouchableOpacity >
                        <Text style={StyleSheet.title}>Help</Text>
                    </TouchableOpacity>
                </Text>
                <Text style={StyleSheet.row}>
                <Icon name='log-out' type='entypo' color='rgba(255,255,255,0.75)'/>
                    <TouchableOpacity onPress={backLogin}>
                        <Text style={StyleSheet.title}>Logout</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}
export default proFileScreen