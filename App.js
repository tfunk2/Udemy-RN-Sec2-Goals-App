import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView, 
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals( currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: enteredGoal }
    ])
  }

  return (
    <View style={{padding: 50 }}>
      <GoalInput 
        goalInputHandler={goalInputHandler} 
        enteredGoal={enteredGoal}
        addGoalHandler={addGoalHandler}
      />
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => <GoalItem title={itemData.item.value} />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
