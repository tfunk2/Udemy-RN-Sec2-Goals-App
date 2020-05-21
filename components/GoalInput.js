import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = (props) => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const buttonPressHandler = () => {
      props.addGoalHandler(enteredGoal)
  }

    return (
        <View style={styles.goalInputView}>
            <TextInput 
            placeholder="Course Goal" 
            style={styles.goalInputText} 
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button title="ADD" onPress={buttonPressHandler} />
        </View>
    )

}

const styles = StyleSheet.create({
    goalInputView: {
        flexDirection: 'row', 
        justifyContent:'space-between', 
        marginLeft: 10
    },
    goalInputText: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 15
    }
})

export default GoalInput;