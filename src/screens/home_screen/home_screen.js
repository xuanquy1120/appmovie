import React from 'react'
import {View, Text,Button,ImageBackground,Image,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyleSheet from './styles'
import LinearGradient from 'react-native-linear-gradient';


 const homeScreen = ()=>{
    const navigation = useNavigation()
    const MovieDetails=()=>{
        navigation.navigate('movieDetails')
    }
    const TvShowDetails=()=>{
        navigation.navigate('tvShowDetails')
    }
     return (     
         <View style={StyleSheet.container} > 
           
            <LinearGradient colors={['black','rgba(0,0,0,0)','black']} style={StyleSheet.linearGradient}>
                <ImageBackground source={require('../image/home_sreen/Layer_1.png')} style={StyleSheet.imageBackGround}>
                <TouchableOpacity  onPress={MovieDetails} >
                    <Image source={require('../image/home_sreen/Dora_and_the_Lost_City_of_Gold_-_logo_(English).png')}
                    style={StyleSheet.image}/>
                </TouchableOpacity>
                </ImageBackground>
            </LinearGradient>
            <View style={StyleSheet.btn}>
                <Text style={StyleSheet.text}>4.0</Text>
                <View style={StyleSheet.btnContainer}>
                    <Image source={require('../image/home_sreen/star-2.png')} />
                    <Image source={require('../image/home_sreen/star-2.png')} />
                    <Image source={require('../image/home_sreen/star.png')} />
                    <Image source={require('../image/home_sreen/star.png')} />
                    <Image source={require('../image/home_sreen/star.png')} />
                </View>
                <View style={StyleSheet.btnContainer} >
                    <TouchableOpacity  onPress={MovieDetails} >
                        <Text style={StyleSheet.title}>Movie |</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                            <Text style={StyleSheet.title}>  Adventure |</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  >
                            <Text style={StyleSheet.title}>  Comedy |</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                            <Text style={StyleSheet.title}>  Family </Text>
                    </TouchableOpacity>
                </View>
                <Text style={StyleSheet.text1}>Watching</Text>
                <View style={StyleSheet.btnContainerImg} >
                    <TouchableOpacity>
                        <Image source={require('../image/home_sreen/f8b938401308eabc48c30669869eeac8.png')}  style={StyleSheet.imagefilm}/>
                    </TouchableOpacity>
                    <TouchableOpacity   >
                        <Image source={require('../image/home_sreen/e38d645574a267d62c7320ca51baf6d2.png')}  style={StyleSheet.imagefilm}/>
                    </TouchableOpacity>
                    <TouchableOpacity   >
                        <Image source={require('../image/home_sreen/Annabelle.png')}  style={StyleSheet.imagefilm}/>
                    </TouchableOpacity>
                    <TouchableOpacity   >
                        <Image source={require('../image/home_sreen/d09cbedd39d8c74b576632e50de5c3d3.png')}  style={StyleSheet.imagefilm}/>
                    </TouchableOpacity>
                </View>
            </View>
         </View>       
     )
 }
 export default homeScreen