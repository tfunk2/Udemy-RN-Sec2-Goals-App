import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = (props) => {

    return (
        <View style={styles.goalInputView}>
            <TextInput 
            placeholder="Course Goal" 
            style={styles.goalInputText} 
            onChangeText={props.goalInputHandler}
            value={props.enteredGoal}
            />
            <Button title="ADD" onPress={props.addGoalHandler} />
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