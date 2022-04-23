import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        // backgroundColor:"#FCD63B",
        backgroundColor:"#fff",
        // borderColor:"#bdbdbd",
        borderColor:"#FFE264",
        borderWidth:2,
        margin:10,
        flexDirection:"row",
        borderRadius:10,
        borderBottomLeftRadius:75,
        borderTopLeftRadius:75,
        alignItems:"center"
    },
    image:{
        width:100,
        minHeight:75,
        resizeMode:"contain",
        backgroundColor:"white",
        borderRadius:75
    },
    body_container:{
        flex:1,
        padding:5,
        justifyContent:"space-between"
    },
    title:{
        fontWeight:"normal",
        fontSize:22,
        color:"#000"
    },
    description:{
        textAlign:"right",
        color:"#000",
        fontSize:12,
        fontStyle:"italic",
        fontWeight:"500"
    },
    
})