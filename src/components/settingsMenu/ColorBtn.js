import React from 'react'

export default function ColorBtn({color, colorChoice, setColorChoice}) {
    function onClickColorButton(e){
        e.preventDefault()
        setColorChoice(color)
    }
    
    return (
        <button
            className={`settings__color-picker-btn settings__color-picker-btn--${color} ${colorChoice === color? "settings__color-picker-btn--selected" : ""}`}
            type="button"
            onClick={onClickColorButton}
        >
        </button>
    )
}
