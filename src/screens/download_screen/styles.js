import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'black',
    },
    btnContainer: {
        flex:0.2,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    image:{
    flex:1,
    marginLeft:20,
    marginTop:30,
    },
    title:{
    marginLeft:20,
    fontSize:20,
    color: 'white',
    },
    text:{
    color: 'rgba(255,255,255,0.67)',
    marginLeft:20,
    fontSize:15,
    marginBottom:50,
    }
});