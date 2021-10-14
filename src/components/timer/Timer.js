import React, {useState, useEffect} from 'react'
import ProgressBar from './ProgressBar'
import { displayTimerValue } from '../../helpers/TimerHelper'
import { useTimerContext } from '../../contexts/TimerProvider'

export default function Timer({activeColor}) {    
    const {timerInitialValue, timerStates } = useTimerContext()

    const [timerCurrentValue, setTimerCurrentValue] = useState(timerInitialValue * 60000)      //time in ms
    const [timerActive, setTimerActive] = useState(false)
    const [timerState, setTimerState] = useState(timerStates.start)

    const [ellipseInitial, setEllipseInitial] = useState(true)
    const [ellipseActive, setEllipseActive] = useState(false)
    const [ellipseRunning, setEllipseRunning] = useState(false)
 
    function updateTimerTextAfterClick(){
        timerState === timerStates.start
            ? setTimerState(timerStates.pause)
            : setTimerState(timerStates.start)     
    }

    function onClickTimer(){
        if(timerActive){
            if(timerState === timerStates.pause)
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
                setTimerState(timerStates.restart)
            return () => clearInterval(timeout)
        }else{
            clearInterval(timeout)
        }
    }, [timerActive, timerCurrentValue, timerStates.restart])

    //when the user changes the timer type, reset the timer with the corresponding initial time
    useEffect(() => {
        setTimerCurrentValue(timerInitialValue * 60000)
        setEllipseActive(false)
        setEllipseInitial(true)
        setTimerActive(false)
        setTimerState(timerStates.start)
    }, [timerInitialValue, timerStates.start])

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