import React from 'react'
import NavItem from "./NavItem"

export default function Nav({color, navItemActive, setNavItemActive}) {
    const onClickNavItem = (name) => {
        setNavItemActive(name)
    }
    
    function createNavItem(name, text){
        return (
            <NavItem
                key={name}
                color={color}
                name={name}
                text={text}
                navItemActive={navItemActive}
                onClickNavItem={() => onClickNavItem(name)} />
        )
    }

    const navItems = [
       createNavItem('pomodoro', 'pomodoro'),
       createNavItem('shortBreak', 'short break'),
       createNavItem('longBreak', 'long break')
    ]
    return (
        <nav className="nav">
            <ul>
                {navItems.map(navItem => navItem)}
            </ul>
        </nav>
    )
}
