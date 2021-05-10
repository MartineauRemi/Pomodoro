import React from 'react'

export default function ColorBtn({color, colorChoice, onClickColorBtn}) {
    return (
        <button
            className={`settings__color-picker-btn settings__color-picker-btn--${color} ${colorChoice === color? "settings__color-picker-btn--selected" : ""}`}
            type="button"
            onClick={(e) => {
                e.preventDefault()
                onClickColorBtn(color)
                }
            }
        >
        </button>
    )
}
