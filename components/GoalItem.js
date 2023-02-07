import { StyleSheet, View, Text, Pressable } from "react-native";

function changeStyle() { return pressedData.pressed && styles.pressedItem }
function GoalItem(props) {
    return (
        <View style={styles.goalContainer}>
            <Pressable android_ripple={{ color: 'white' }} style={[(pressedData) => pressedData.pressed && styles.pressedItem, styles.pressableContainer]} onPress={props.deleteGoalHandler.bind(this, props.keyID)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    goalContainer: {
        flex: 1,
        margin: 8,
        borderRadius: 7,
        backgroundColor: '#5e0acc',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        padding: 8,
        color: 'white',
        fontSize: 15
    },
    pressableContainer: {


    }
});

export default GoalItem;