import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./GoalItem";

function GoalContainer(props) {
    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={props.courseGoals}
                renderItem={(itemData) => {
                    return <GoalItem text={itemData.item.text} />
                }}
            // keyExtractor={(item, index) => {return item.id}}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 7,
        flexDirection: 'column',
    }
});

export default GoalContainer;