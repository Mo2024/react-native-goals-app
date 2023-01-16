import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalContainer from './components/GoalContainer';
import GoalInput from './components/GoalInput';


export default function App() {
  const [eneteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(eneteredText) { setEnteredGoalText(eneteredText) };
  function addGoalHandler() { setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: eneteredGoalText, key: Math.random().toString() }]) };
  function deleteGoalHandler(key) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    })
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />

      <GoalContainer
        courseGoals={courseGoals}
        deleteGoalHandler={deleteGoalHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  }
});