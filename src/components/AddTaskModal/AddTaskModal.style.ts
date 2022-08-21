import { StyleSheet,Dimensions} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
const deviceSize=Dimensions.get('window');
export default StyleSheet.create({
    modalContainer:{
        justifyContent:'flex-end',
        margin:0
    },
    innerContainer:{
        backgroundColor:Colors.defaultGreyColor,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:deviceSize.height/3,
        padding:10,
    },
    title:{
        color:Colors.defaultTitleColor,
        fontFamily:Fonts.defaultRegularFontFamily,
        textAlign:'center',
        fontSize:18
    },
    input:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'white',
        marginTop:30,
        color:'white'
    },
    buttonContainer:{
        backgroundColor:Colors.defaultGreenColor,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        padding:10
    },
    buttonPlaceHolder:{
        color:Colors.defaultDarkColor,
        fontFamily:Fonts.defaultRegularFontFamily,
        fontSize:15
    }
   
})