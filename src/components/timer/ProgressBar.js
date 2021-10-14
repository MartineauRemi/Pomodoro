import React from 'react'
import { useTimerContext } from '../../contexts/TimerProvider'

export default function ProgressBar({timerInitialValue, timerState, ellipseInitial, ellipseActive, ellipseRunning, activeColor}) {
    const { timerStates } = useTimerContext()
    const className = `
        ellipse
        ${ellipseActive ? "ellipse--active" : ""}
        ${ellipseRunning? "ellipse--running" : "ellipse--paused"}
        ${timerState === timerStates.restart ? "ellipse--completed" : ""}
        ${ellipseInitial? "ellipse--initial" : ""}
        ellipse--${activeColor}
    `

    const style = ellipseActive
        ? ({animationDuration: (timerInitialValue * 60000) + "ms"})
        : (
            ellipseInitial
                ? {animation: 'unset'}
                : ""
        )

    return (
        <div className="timer__circle">
            <svg className="circle" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <ellipse
                        className={className}
                        style={style}
                        ry="124"
                        rx="124"
                        cy="150"
                        cx="150"
                        strokeWidth="10"/>
                </g>
            </svg>
        </div>
    )
}
