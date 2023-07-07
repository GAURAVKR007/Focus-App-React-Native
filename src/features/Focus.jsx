import React from 'react'
import { View, StyleSheet, Text, } from 'react-native'
import { colors } from '../utils/colors'

function Focus() {
  return (
    <>
    <View style={styles.container}> 
        <Text style={styles.text}>Focus Feature</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    text : {
        color: colors.white
    }
})

export default Focus