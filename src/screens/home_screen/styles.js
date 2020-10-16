import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',

    },
    linearGradient: {
        flex: 0.6,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        // position: 'absolute',
        // zindex:2,
    },
    imageBackGround: {
        flex: 1,
        width: '95%',
        marginLeft:20,
        justifyContent: "center",
        // position: 'absolute',
        // zindex:1,
    },
    image:{
        marginHorizontal:50,
        marginTop:220,
        display: "flex",
    },
    btn:{
        flex: 0.4,
        backgroundColor:'black'
    },
    text:{
        color:'white',
        fontSize:30,
        alignSelf: 'center',
    },
    btnContainer:{
        flex: 0.1,
        alignSelf: 'center',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        color: 'white',
        fontSize: 15,
        textAlign:"center",
    },
    text1:{
        color:'white',
        fontSize:15,
        marginTop:20,
    },
    btnContainerImg:{
        flex: 1,      
        flexDirection:'row',
    },
    imagefilm: {
        marginTop:10,
        marginLeft:10,
    }
});