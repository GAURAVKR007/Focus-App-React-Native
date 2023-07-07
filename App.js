import { StyleSheet, Text, StatusBar, View,SafeAreaView ,Platform , Button, Alert } from 'react-native';
import React, {useState} from 'react';

import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';
// import { transparent } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null)
  return (
    <>
    {/* <StatusBar barStyle="light-content" backgroundColor="orange" /> */}
      <SafeAreaView style={styles.container}>
        {!currentSubject ? <Focus addSubject={setCurrentSubject}/> : <View><Text style={{color: colors.white}}> I am here for {currentSubject}</Text></View>}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  }
});
