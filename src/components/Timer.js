import React, {useState, useEffect} from 'react'

export default function Timer({navItemActive, timerInitialValue, name, activeColor}) {    
    const TIMER_STATE_START = "START"
    const TIMER_STATE_RESTART = "RESTART"
    const TIMER_STATE_PAUSE = "PAUSE"

    /**
     * This is a 1sec countdown. It restarts itself to 1000ms
     * every second. It allows the main timer to start/pause
     * without any delay, so that the animation of the circle
     * is synchronized with the main timer value.
     **/
    const [oneSecondCD, setOneSecondCD] = useState(0)
    const [OneSecondCDTimeoutId, setOneSecondCDTimeoutId] = useState()
    

    const [timerCurrentValue, settimerCurrentValue] = useState(timerInitialValue * 60)
    const [ellipseInitial, setEllipseInitial] = useState(true)
    const [ellipseActive, setEllipseActive] = useState(false)
    const [ellipseRunning, setEllipseRunning] = useState(false)
    const [timeoutId, setTimeoutId] = useState()
    
    //when the user changes the timer value in the settings, update the value of the Timer Component
    useEffect(() => {
        settimerCurrentValue(timerInitialValue * 60)
        setEllipseActive(false)
        setEllipseInitial(true)
        if(timerState === TIMER_STATE_PAUSE)
            stopTimer()
        setTimerState(TIMER_STATE_START)
    }, [timerInitialValue])

    const getMinutes = (time) => parseInt(time / 60)
    const getSeconds = (time) => (time % 60 < 10 ? "0" : "") + time % 60
    const displayTimerValue = () => getMinutes(timerCurrentValue) + ":" + getSeconds(timerCurrentValue)

    //timer start / pause label
    const [timerState, setTimerState] = useState(TIMER_STATE_START)

    function updateTimerTextAfterClick(){
        if(timerState === TIMER_STATE_START){
            setTimerState(TIMER_STATE_PAUSE)
        }else if(timerState ===  TIMER_STATE_PAUSE || timerState === TIMER_STATE_RESTART)
            setTimerState(TIMER_STATE_START)
    }

    function onClickTimer(){
        switch(timerState){
            case TIMER_STATE_START:
                startTimer()
                if(!ellipseActive)
                    setEllipseActive(true)
                setEllipseRunning(true)
                setEllipseInitial(false)
                break
            case TIMER_STATE_PAUSE:
                stopTimer()
                setEllipseRunning(false)
                break

            case TIMER_STATE_RESTART:
                settimerCurrentValue(timerInitialValue * 60)
                setEllipseActive(false)
                setEllipseInitial(true)
                break
            default:
                break
        }
        updateTimerTextAfterClick()
    }

    function startTimer(){
        if(timerCurrentValue > 0)
            setTimeout(() => settimerCurrentValue(timerCurrentValue - 1), oneSecondCD) //modifiée settimerCurrentValue(timerCurrentValue - 1)
    }

    function stopTimer(){
        clearTimeout(timeoutId)
    }



    //main timer countdown
    useEffect(() => {
        if(timerState === TIMER_STATE_PAUSE){
            if(timerCurrentValue > 0)
                 setTimeoutId(setTimeout(() => {settimerCurrentValue(timerCurrentValue - 1)}, 1000)) 
            else if(timerCurrentValue === 0){
                setTimerState(TIMER_STATE_RESTART) 
                setTimeout(() => setEllipseRunning(false), 1000)
            }
        }       
    }, [timerCurrentValue])
    
    // 1sec timer countdown to add more precision to the main timer
    useEffect(() => {
        if(timerState === TIMER_STATE_PAUSE){
            if(oneSecondCD > 0)
                setOneSecondCDTimeoutId(setTimeout(() => {setOneSecondCD(oneSecondCD - 10)}, 10))
            else if(oneSecondCD === 0){
                setOneSecondCD(1000)
            }
        }
    }, [oneSecondCD, timerCurrentValue])


    //set the timer back to initial value if another timer is displayed
    useEffect(() => {
        stopTimer()
        settimerCurrentValue(timerInitialValue * 60)
        setEllipseActive(false)
        setEllipseInitial(true)
        setTimerState(TIMER_STATE_START)
    }, [navItemActive])


    return (
        <section className={`timer ${navItemActive === name? "timer--active" : ""}`} onClick={onClickTimer}>
            <div className="timer__circle">
                <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <ellipse
                            className={`ellipse ${ellipseActive
                                                    ? "ellipse--active"
                                                    : ""
                                                }
                                        ellipse--${ellipseRunning
                                                    ? "running"
                                                    : "paused"
                                                }
                                        ${timerState === TIMER_STATE_RESTART
                                        ? "ellipse--completed"
                                        : ""}

                                        ${ellipseInitial? "ellipse--initial" : ""}
                                        
                                        ellipse--${activeColor}`
                            }
                            style={
                                ellipseActive ?
                                    ({animationDuration: (timerInitialValue * 60) + "s"})
                                    : (ellipseInitial?
                                            ({animation: 'unset'})
                                            : "")
                                }
                            ry="124"
                            rx="124"
                            cy="150"
                            cx="150"
                            strokeWidth="10"/>
                    </g>
                </svg>
            </div>
            <div className="timer__content">
                <h1>{displayTimerValue(navItemActive)}</h1>
                <h3>{timerState}</h3>
            </div>
        </section>
    )
}