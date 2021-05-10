import React from 'react'

export default function NavItem({color, navItemActive, onClickNavItem, name, text}) {
    return (
        <li
            className={`nav__item ${navItemActive === name? "nav__item--active nav__item--active-" + color : ""}`}
            onClick={onClickNavItem}
        >
            {text}
        </li>
    )
}
