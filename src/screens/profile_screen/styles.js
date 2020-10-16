import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        flex: 1,
    },
    imgAvatar: {
        flex:1,
        width:'40%',
        marginTop: 25,
        borderWidth: 5,
        borderRadius: 1000,
        borderColor: "#daa520",
        justifyContent: "center",
        fontWeight: "bold",
        marginHorizontal:120,
    },
    btnContainer:{
        flex: 0.3,
    },
    btn:{
        flex:0.7,
    },
    nameUser: {
        color: 'white',
        fontSize: 20,
        textAlign:"center",
        marginTop:15,
      },
      Premium:{
        color: 'rgb(255,178,36)',
        fontSize: 15,
        textAlign:"center",
        marginTop:5,
      },
      row: {
        padding: 4,
        borderBottomColor: "white",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 30,
        marginTop:15,
        marginBottom:20,
      },
      title: {
        color: 'white',
        fontSize: 20,
        textAlign:"center",
        marginLeft:40,
      }
});