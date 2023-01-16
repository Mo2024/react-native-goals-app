import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

function GoalItem(props) {
    return (
        <View style={styles.goalContainer}>
            <Text style={styles.goalText}> {props.text} </Text>
            <View style={styles.svgView} >
                <Pressable onPress={props.deleteGoalHandler.bind(this, props.keyID)}>
                    <MaterialIcons name="delete" size={20} color="red" />
                </Pressable>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    goalContainer: {
        flex: 1,
        width: '90%',
        margin: 8,
        padding: 19,
        borderRadius: 7,
        backgroundColor: '#5e0acc',
        flexDirection: 'row',
    },
    goalText: {
        color: 'white',
        fontSize: 15
    },
    svgView: {
        flex: 1,
        flexDirection: "row-reverse",
    }
});

export default GoalItem;