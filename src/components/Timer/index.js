import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'react-native'
import { formatTimer } from '../utilis/helperFunctions'

export function Timer(props) {

    const [seconds, setSeconds] = useState(props.descending ? props.maxSeconds : 0)

    let interval

    useEffect(() => {
        interval = setInterval(() => {
            setSeconds(props.descending ? seconds - 1 : seconds + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [seconds])

    useEffect(() => {
        const deadLineVal = props.descending ? 0 : props.maxSeconds
        if (seconds === deadLineVal) {
            clearInterval(interval)
            props.deadLineFunction()
        }
    }, [seconds])


    return (
        <Text>{formatTimer(seconds)}</Text>
    );

}