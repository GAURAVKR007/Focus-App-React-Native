import React from 'react'
import { Text,View, StyleSheet } from 'react-native'
import RoundedButton from '../components/RoundedButton'

function Timing({onChangeTime}) {
  return (
    <View style={styles.timingButton}>
        <RoundedButton size={70} title='15' onPress={() => onChangeTime(15)}/>
        <RoundedButton size={70} title='25' onPress={() => onChangeTime(25)}/>
        <RoundedButton size={70} title='45' onPress={() => onChangeTime(45)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

export default Timing