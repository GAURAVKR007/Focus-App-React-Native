import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Timer({focusSubject,onTimerEnd,clearSubject}) {
  return (
    <View>
        <Text>Focus Feature : {focusSubject}</Text>
    </View>
  )
}

export default Timer