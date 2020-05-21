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

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals( currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: enteredGoal }
    ])
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => <GoalItem onDelete={() => console.log("working?")} title={itemData.item.value} />} 
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
