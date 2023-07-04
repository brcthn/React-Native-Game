import { View,TextInput,StyleSheet,Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
function StartGameScreen({onPickedNumber}){
    const [enteredNumber,setEnteredNumber] = useState("");
    function numberInputHandler(num){
        setEnteredNumber(num);
    }
    function resetInputHandler(){
        setEnteredNumber("")
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                "Invalid Number",
                "Number has to be a number  between 1 and 99.",
                [{text:'Okay',style:"destructive", onPress:resetInputHandler}]
                )
            return;
        }
        onPickedNumber(chosenNumber);
    }
    return(
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainers}>
                    <View style ={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style ={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                    
                </View>
            </Card>
        </View>
    )
}
export default StartGameScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:"center"
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:"#ddb52f",
        borderBottomWidth:2,
        color:"#ddb52f",
        marginVertical:8,
        fontWeight:"bold"
    },
    buttonsContainers:{
        flexDirection:"row"
    },
    buttonContainer:{
        flex:1
    }
})