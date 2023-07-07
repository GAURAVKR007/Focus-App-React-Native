import React from 'react'
import { View, StyleSheet, Text, } from 'react-native'
import { colors } from '../utils/colors'
import { TextInput } from 'react-native-paper';
import RoundedButton from '../components/RoundedButton';

function Focus() {
    const [subject, setSubject] = React.useState("");
  return (
    <>
    <View style={styles.container}> 
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            label="What would you like to focus on ?" 
            textColor='black'
            value={subject}
            onChangeText={text => setSubject(text)}
            />
            <RoundedButton title="+" />
            {/* <Text style={{color: colors.white}}>{subject}</Text> */}
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    inputContainer: {
        flex: 0.3,
        padding: 25,
        justifyContent: "flex-start",
    },
    textInput : {
        fontSize: 14
    }
})

export default Focus