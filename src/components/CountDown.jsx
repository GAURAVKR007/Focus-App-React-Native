import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'

const minutesToMills = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const CountDown = forwardRef(({minutes=0.12,isPaused, onProgress, onEnd }, ref ) => {



    useImperativeHandle(ref,()=>{
        return {
            reseting: reseting
        }
    })

    const interval = React.useRef(null);
    const [millis,setMillis] = useState(null);
    const reseting = () => setMillis(minutesToMills(0.12))
    const countDown = () => {
        setMillis((time) => {
          if (time <= 1000) {
            clearInterval(interval.current);
            onEnd();
            // reset()
            return 0;
          }
          const timeLeft = time - 1000;
          return timeLeft;
        });
      };
      
      useEffect(()=>{
        if(millis <= 0) {
            setTimeout(()=>{
                setMillis(minutesToMills(0.12))
            },1500)
        }
        console.log("Countdown"+millis);
      },[millis])

    useEffect(()=> {
        setMillis(minutesToMills(minutes));
    },[minutes])

    useEffect(()=> {
        onProgress(millis / minutesToMills(minutes))
    })

    useEffect(()=>{
        if(isPaused) {
            if(interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(countDown,1000);

        return () => clearInterval(interval.current);
    }, [isPaused])

    const minute = Math.floor(millis/1000/60)%60;
    const seconds = Math.floor(millis/1000)%60;

  return (
    <Text style={styles.text}>
        {formatTime(minute)} : {formatTime(seconds)}
    </Text>
  )
})

const styles = StyleSheet.create({
    text : {
        fontSize : 45,
        fontWeight: 'bold',
        color: colors.white,
        padding: 40,
        backgroundColor: 'rgba(94,132,226,0.3)'
    }
})

export default CountDown