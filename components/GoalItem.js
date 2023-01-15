import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable onPress={props.deleteGoalHandler}>
            <View style={styles.goalContainer}>
                <Text style={styles.goalText}> {props.text} </Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    goalContainer: {
        width: '90%',
        margin: 8,
        padding: 15,
        borderRadius: 7,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        color: 'white'
    }
});

export default GoalItem;