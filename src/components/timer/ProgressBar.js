import React from 'react'

export default function ProgressBar({timerInitialValue, timerState, ellipseInitial, ellipseActive, ellipseRunning, activeColor}) {
    const TIMER_STATE_RESTART = "RESTART"

    return (
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
                                ({animationDuration: (timerInitialValue * 60000) + "ms"})
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
    )
}
