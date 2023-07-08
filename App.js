import {ActivityIndicator, StyleSheet, Text, StatusBar, View,SafeAreaView ,Platform , Button, Alert } from 'react-native';
import React, {useEffect, useState} from 'react';
import Timer from './src/features/Timer';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';
import FocusHistory from './src/features/FocusHistory';
import Splash from './src/screens/Splash';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState()
  const [history,setHistory] = useState([])
  const [isLoading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false);
    },2000)
  })

  return (<>
  
    {isLoading ? <View style={{flex: 1,justifyContent: "center", alignItems: "center", backgroundColor: colors.darkBlue}}><ActivityIndicator 
        size={100}
        color="#fff"
        /></View> : <>
    <StatusBar barStyle="light-content" backgroundColor={colors.darkBlue} />
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <>
        <Focus addSubject={setCurrentSubject}/>
        <FocusHistory history={history}/>
        </>
        ) : 
        (
          <Timer 
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history,subject])
          }}
          clearSubject={() => {setCurrentSubject(null)}}
          />
        )}
      </SafeAreaView>
    </>
    }
    
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight - 25 : 0,
    backgroundColor: colors.darkBlue,
  }
});
