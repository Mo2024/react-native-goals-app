import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

function GoalInput(props) {
    return (

        <Modal visible={props.visibility} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={props.goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.endAddGoalHandler} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={props.addGoalHandler} color="#5e0acc" />
                    </View>
                </View>
            </View>
        </Modal >

    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: '#b180f0'

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccccccc',
        width: '75%',
        padding: 8,
        borderRadius: 7,
        backgroundColor: '#e4d0ff',
        borderColor: '#e4d0ff',
        color: '#120438'
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    button: {
        width: '35%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});

export default GoalInput;