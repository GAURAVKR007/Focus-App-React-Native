import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';
import CountDown from '../components/CountDown';
import RoundedButton from '../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../utils/colors';
import Timing from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

function Timer({ focusSubject, onTimerEnd, clearSubject }) {
    useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.12);

  const childRef = useRef();

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const onEnd = () => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    onTimerEnd(focusSubject);
  };

  const handleReset = () => {
    setIsStarted(false);
    setProgress(1);
    // console.log(progress);
    childRef.current.reseting()
    setMinutes(0.12)
  }



  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          ref={childRef}
          minutes={minutes}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          isPaused={!isStarted}
          onEnd={onEnd}
        />

        <View style={{ paddingTop: 40 }}>
          <Text style={styles.title}>Focusing on : </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        <ProgressBar
          color={colors.progressBar}
          style={{ height: 7, backgroundColor: "#C5DFF8" }}
          progress={progress}
        />
      </View>
      <View
        style={[
          styles.buttonWrapper,
          { flex: 0.1, paddingTop: 25, alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="Start" size={125} onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="Pause" size={125} onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton size={80} title="Clear" onPress={clearSubject} />
        <RoundedButton size={80} title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    countdown : {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonWrapper : {
        flex: 0.3,
        flexDirection: "row",
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "yellow",
    },
    title: {
        color: colors.white,
        textAlign: "center"
    },
    task: {
        color: colors.white,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 25
    },
    clearSubject: {
        flexDirection: 'row',
        justifyContent: "space-around"
    }
})
export default Timer