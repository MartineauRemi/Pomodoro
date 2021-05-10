import React from 'react'

export default function TimeItem({name, text, value, onChangeValue}) {
    const MAX_VALUE = 360
    const MIN_VALUE = 0
    const STEP = 1

    const onClickMore = () => onChangeValue(value === MAX_VALUE? value : value + 1)
    const onClickLess = () => onChangeValue(value === MIN_VALUE? value : value - 1)
    return (
        <section className="settings__time-item">
            <label htmlFor={name}>
                <h4>{text}</h4>
            </label>
            <input
                name={name}
                type="number"
                min={MIN_VALUE}
                max={MAX_VALUE}
                step={STEP}
                value={value}
                onChange={(e) => onChangeValue(e.target.value)}/>
            <div
                className="settings__time-item-btn
                           settings__time-item-btn--more"
                onClick={onClickMore}>
            </div>
            <div
                className="settings__time-item-btn
                           settings__time-item-btn--less"
                onClick={onClickLess}>
            </div>
        </section>
    )
}
