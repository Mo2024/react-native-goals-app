import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalContainer from './components/GoalContainer';
import GoalInput from './components/GoalInput';


export default function App() {

  const [eneteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  return (
    <View style={styles.appContainer}>
      <GoalInput
        eneteredGoalText={eneteredGoalText}
        setEnteredGoalText={setEnteredGoalText}
        setCourseGoals={setCourseGoals}
      />

      <GoalContainer
        courseGoals={courseGoals}
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