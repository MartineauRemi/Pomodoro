import React from 'react'
import { useTimerContext } from '../../contexts/TimerProvider'
import NavItem from "./NavItem"

export default function Nav({color}) {
    const { timerTypes } = useTimerContext()

    return (
        <nav className="nav">
            <ul>
                {timerTypes.map(navItem => (
                    <NavItem
                        key={navItem.name}
                        color={color}
                        data={navItem}
                    />
                ))}
            </ul>
        </nav>
    )
}
