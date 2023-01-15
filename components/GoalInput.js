import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput(props) {
    function goalInputHandler(eneteredText) { props.setEnteredGoalText(eneteredText) };
    function addGoalHandler() { props.setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: props.eneteredGoalText, key: Math.random().toString() }]) };

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    }
});

export default GoalInput;