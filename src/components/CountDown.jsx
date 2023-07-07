import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'

const minutesToMills = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

function CountDown({minutes=0.1,isPaused, onProgress, onEnd}) {

    const interval = React.useRef(null);
    const [millis,setMillis] = useState(null);

    const countDown = () => {
        setMillis((time) => {
            if(time === 0) {
                clearInterval(interval.current);
                onEnd();
                return time;
            }
            const timeLeft = time - 1000;
            return timeLeft;
        })
    }

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
    <Text style={styles.Text}>
        {formatTime(minute)} : {formatTime(seconds)}
    </Text>
  )
}

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