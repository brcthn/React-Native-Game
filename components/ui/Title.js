import { Text, StyleSheet, Platform} from "react-native";
import Colors from "../../constants/colors";

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}
export default Title;


const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        color: "white",
        textAlign: "center",
        borderColor: "white",
        borderWidth: Platform.OS === "android" ? 2 : 0,
        padding: 16,
        fontFamily:'open-sans-bold',
        maxWidth:'80%',
        width: 300

    }
})