import React from 'react'
import { View, Text,StatusBar } from 'react-native'
import LottieView from "lottie-react-native"
function Splash() {
  return (
    <View style={{flex: 1, alignItems: "center", margin: 0}}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <LottieView
            source={require("../utils/Loading.json")}
            autoPlay
            loop={true}
            resizeMode='cover'
            // onAnimationFinish={}
        />
    </View>
  )
}

export default Splash