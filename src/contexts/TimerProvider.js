import React, { useState, useContext } from 'react'

const timerContext = React.createContext()

export function useTimerContext(){
    return useContext(timerContext)
}

export default function TimerProvider({children}) {
    const timerStates = {
        start: 'START',
        restart: 'RESTART',
        pause: 'PAUSE'
    }

    //default initial values of the differents timers
    const [pomodoroTimer, setPomodoroTimer] = useState(25)
    const [shortBreakTimer, setShortBreakTimer] = useState(5)
    const [longBreakTimer, setLongBreakTimer] = useState(10)

    const timerTypes = [
        {
            name: 'pomodoro',
            label: 'pomodoro',
        },
        {
            name: 'shortBreak',
            label: 'short break',
        },
        {
            name: 'longBreak',
            label: 'long break',
        }
    ]
    const [timerInitialValue, setTimerInitialValue] = useState(pomodoroTimer)

    const [timerType, setTimerType] = useState(timerTypes[0])

    function switchTimerInitialValue(timerType, pomodoroTimerValue, shortBreakTimerValue, longBreakTimerValue){
        switch(timerType.name){
            case 'pomodoro':
                setTimerInitialValue(pomodoroTimerValue)
                break
            case 'shortBreak':
                setTimerInitialValue(shortBreakTimerValue)
                break
            case 'longBreak':
                setTimerInitialValue(longBreakTimerValue)
                break
            default:
                break
        }
      }

    const providerValue = {
        pomodoroTimer,
        setPomodoroTimer,
        shortBreakTimer,
        setShortBreakTimer,
        longBreakTimer,
        setLongBreakTimer,
        timerType,
        setTimerType,
        timerStates,
        timerTypes,
        timerInitialValue,
        switchTimerInitialValue
    }
    return (
        <timerContext.Provider value={providerValue}>
            {children}
        </timerContext.Provider>
    )
}
