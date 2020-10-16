import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    imageBackGround: {
        flex: 1,
        justifyContent: "center"
      },
      title: {
        color: 'white',
        fontSize: 17,
        textAlign:"center",
        marginTop:20,
      },
      imageLogo:{
        flex: 0.4,
        width:200,
        height:100,
        marginLeft:45,
      },
      imageLeft:{
        marginLeft:150,
      },
      imageRight:{
        marginRight:150,
      },
      btnContainer:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
      }, 
      linearGradient: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      },
});