import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {

  const [eneteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(eneteredText) { setEnteredGoalText(eneteredText) };

  function addGoalHandler() { setCourseGoals(currentCourseGoals => [...currentCourseGoals, eneteredGoalText]) };

  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView contentContainerStyle={styles.centerGoalContainer} >
          {courseGoals.map((goal, i) => <View key={i} style={styles.goalContainer}><Text style={styles.goalText} >{goal}</Text></View>)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    // backgroundColor: '#DE5D82'
  },
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
  },
  goalsContainer: {
    flex: 7,
    flexDirection: 'column',
    // alignItems: 'center'
  },
  centerGoalContainer: {
    alignItems: 'center'
  },
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