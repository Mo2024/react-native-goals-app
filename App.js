import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GoalContainer from './components/GoalContainer';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [eneteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(eneteredText) { setEnteredGoalText(eneteredText) };
  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: eneteredGoalText, key: Math.random().toString() }])
    setEnteredGoalText('')
    endAddGoalHandler();
  };
  function startAddGoalHandler() { setModalIsVisible(true); }
  function endAddGoalHandler() { setModalIsVisible(false); }
  function deleteGoalHandler(key) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    })
  };

  return (
    <>
      <StatusBar style='' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          visibility={modalIsVisible}
          endAddGoalHandler={endAddGoalHandler}
        />

        <GoalContainer
          courseGoals={courseGoals}
          deleteGoalHandler={deleteGoalHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  }
});