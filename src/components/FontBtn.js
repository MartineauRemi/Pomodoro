import React from 'react'

export default function FontBtn({font, fontChoice, onClickFontBtn}) {
    return (
        <button
            className={`settings__font-picker-btn settings__font-picker-btn--${font} ${fontChoice === font ? "settings__font-picker-btn--selected" : ""}`}
            type="button"
            onClick={(e) => {
                e.preventDefault()
                onClickFontBtn(font)
                }
            }
        >
            Aa
        </button>
    )
}
