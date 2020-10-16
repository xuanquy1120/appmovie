import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/login-screen'
import RegisterScreen from '../screens/register-screen' 
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/home_screen'
import ProFileScreen from '../screens/profile_screen'
import SearchScreen from '../screens/search_screen'
import DownloadScreen from '../screens/download_screen'
import MovieDetails from '../screens/movie_details_screen'
import TvShowDetails from '../screens/tv_show_details_screen'
import {backgroundColor,color} from 'react-native'

const Stack = createStackNavigator()
const Tab=createBottomTabNavigator()
const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName = 'login' screenOptions={{
            headerShown:false,
            gestureEnabled: true
        }} >
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}



const TabNavigator =()=>{
    return (
        
        <Tab.Navigator 
        tabBarOptions={{
          style:{
            backgroundColor: 'rgb(26,26,26)'
          }
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({focused, color,backgroundColor, size}) => {   
                console.log(route.name)
                let focusedColor
                focused? focusedColor = 'rgb(255,178,36)': focusedColor = 'rgba(255,255,255,0.75)'
                if(route.name=='HOME'){
                    return <Icon name='home' type='antdesign'  color={focusedColor} />
                } 
                else if(route.name=='PROFILE'){
                    return <Icon name='person' type='Octicons' color={focusedColor} />
                }
                else if(route.name=='SEARCH')
                {
                    return <Icon name='search' type='AntDesign' color={focusedColor} />
                }
                else if(route.name=='DOWNLOAD')
                {
                    return <Icon name='download' type='antdesign' color={focusedColor} />
                }
            }
            
        })}>
            <Tab.Screen name='HOME'  component={HomeStack}/>
            <Tab.Screen name='SEARCH' component={SearchScreen}/>
            <Tab.Screen name='DOWNLOAD' component={DownloadScreen}/>
            <Tab.Screen name='PROFILE' component={ProFileScreen}/>
        </Tab.Navigator>
    )
}
const HomeStack=()=>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false,
            gestureEnabled: true
        }}>
            <Tab.Screen name='home' component={HomeScreen}/>
            <Tab.Screen name='movieDetails' component={MovieDetails}/>
            <Tab.Screen name='tvShowDetails' component={TvShowDetails}/>
        </Stack.Navigator>
    )
}
const AppStack=()=>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
            gestureEnabled: true
        }}>
            <Stack.Screen name = {"auth"} component={AuthStack}/>
            <Stack.Screen name = {"app"} component={TabNavigator}/>
        </Stack.Navigator>
        )
}
export default AppNavigator=()=>(
    <NavigationContainer>
        {/* {AuthStack()} */}
        {AppStack()}
    </NavigationContainer>
)