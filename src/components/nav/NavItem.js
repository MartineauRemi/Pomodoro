import React from 'react'
import { useTimerContext } from '../../contexts/TimerProvider'

export default function NavItem({color, data}) {

    const { 
        switchTimerInitialValue,
        timerType,
        pomodoroTimer,
        shortBreakTimer,
        longBreakTimer,
        setTimerType 
    } = useTimerContext()

    function onClickNavItem(){
        switchTimerInitialValue(data, pomodoroTimer, shortBreakTimer, longBreakTimer)
        setTimerType(data)
    }

    return (
        <li
            className={`nav__item ${timerType.name === data.name? `nav__item--active nav__item--active-${color}` : ""}`}
            onClick={onClickNavItem}
        >
            {data.label}
        </li>
    )
}
