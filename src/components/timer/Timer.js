import React, {useState, useEffect} from 'react'
import ProgressBar from './ProgressBar'
import { displayTimerValue } from '../../helpers/TimerHelper'
import { useTimerContext } from '../../contexts/TimerProvider'

export default function Timer({activeColor}) {    
    const TIMER_STATE_START = "START"
    const TIMER_STATE_RESTART = "RESTART"
    const TIMER_STATE_PAUSE = "PAUSE"

    const {timerInitialValue } = useTimerContext()

    const [timerCurrentValue, setTimerCurrentValue] = useState(timerInitialValue * 60000)      //time in ms
    const [timerActive, setTimerActive] = useState(false)
    const [timerState, setTimerState] = useState(TIMER_STATE_START)

    const [ellipseInitial, setEllipseInitial] = useState(true)
    const [ellipseActive, setEllipseActive] = useState(false)
    const [ellipseRunning, setEllipseRunning] = useState(false)
 
    function updateTimerTextAfterClick(){
        timerState === TIMER_STATE_START
            ? setTimerState(TIMER_STATE_PAUSE)
            : setTimerState(TIMER_STATE_START)     
    }

    function onClickTimer(){
        if(timerActive){
            if(timerState === TIMER_STATE_PAUSE)
                setEllipseRunning(false)
            else{
                setTimerCurrentValue(timerInitialValue * 60000)
                setEllipseActive(false)
                setEllipseInitial(true)
            }
        }else{
            if(!ellipseActive)
                    setEllipseActive(true)
            setEllipseRunning(true)
            setEllipseInitial(false)
        }
        updateTimerTextAfterClick()
        setTimerActive(!timerActive)
    }
    

    //timer countdown
    useEffect(() => {
        let timeout;
        if(timerActive){
            timeout = setTimeout(() => {
                if(timerCurrentValue > 0)
                    setTimerCurrentValue(timerCurrentValue - 500) 
            }, 500)
            if(timerCurrentValue === 0)
                setTimerState(TIMER_STATE_RESTART)
            return () => clearInterval(timeout)
        }else{
            clearInterval(timeout)
        }
    }, [timerActive, timerCurrentValue])

    //when the user changes the timer type, reset the timer with the corresponding initial time
    useEffect(() => {
        setTimerCurrentValue(timerInitialValue * 60000)
        setEllipseActive(false)
        setEllipseInitial(true)
        setTimerActive(false)
        setTimerState(TIMER_STATE_START)
    }, [timerInitialValue])

    useEffect(() => {
    }, [timerInitialValue])

    return (
        <section className="timer" onClick={onClickTimer}>
            <ProgressBar
                timerInitialValue={timerInitialValue}
                timerState={timerState}
                ellipseInitial={ellipseInitial}
                ellipseActive={ellipseActive}
                ellipseRunning={ellipseRunning}
                activeColor={activeColor}
            />
            <div className="timer__content">
                <h1>{displayTimerValue(timerCurrentValue)}</h1>
                <h3>{timerState}</h3>
            </div>
        </section>
    )
}