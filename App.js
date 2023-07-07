import { StyleSheet, Text, StatusBar, View,SafeAreaView ,Platform , Button, Alert } from 'react-native';
import React, {useState} from 'react';
import Timer from './src/features/Timer';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null)
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor={colors.darkBlue} />
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (<Focus addSubject={setCurrentSubject}/>) : 
        (
          <Timer 
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {setCurrentSubject(null)}}
          />
        )}
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
