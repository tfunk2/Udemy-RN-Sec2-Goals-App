import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Button, 
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.length === 0) {
      return;
    }
    setCourseGoals( currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }
  
  const cancelGoalAddHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onCancel={cancelGoalAddHandler} visible={isAddMode} addGoalHandler={addGoalHandler} />
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />} 
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
    padding: 50
  }
});
