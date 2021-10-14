import React from 'react'

export default function FontBtn({font, fontChoice, setFontChoice}) {
    function onClickFontButton(e){
        e.preventDefault()
        setFontChoice(font)
    }
    return (
        <button
            className={`settings__font-picker-btn settings__font-picker-btn--${font} ${fontChoice === font ? "settings__font-picker-btn--selected" : ""}`}
            type="button"
            onClick={onClickFontButton}
        >
            Aa
        </button>
    )
}
