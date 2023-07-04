import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
    )
}
export default Card;
const styles = StyleSheet.create({
    card:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: Colors.primary800,
        marginTop:100,
        padding:16,
        marginHorizontal:24,
        borderRadius:8,
        elevation:4,
        shadowOffset:{width:0, height:2},
        shadowColor:"black",
        shadowRadius:6,
        shadowOpacity:0.25
    },
})