import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = (props) => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const buttonPressHandler = () => {
      props.addGoalHandler(enteredGoal)
      setEnteredGoal('')
  }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.goalInputView}>
                <TextInput 
                placeholder="Course Goal" 
                style={styles.goalInputText} 
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <View style={styles.buttonsView}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    <Button title="ADD" onPress={buttonPressHandler} />
                </View>
            </View>
        </Modal>  
    )
}

const styles = StyleSheet.create({
    goalInputView: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent:'center', 
        alignItems: 'center'
        // marginLeft: 10
    },
    goalInputText: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 15,
        marginBottom: 10,
        width: '80%'
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    }
})

export default GoalInput;