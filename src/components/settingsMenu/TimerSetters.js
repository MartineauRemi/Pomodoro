import React from 'react'
import TimeSetterItem from './TimeSetterItem'

export default function TimerSetters({pomodoroChoice, onChangePomodoroValue,shortBreakChoice, onChangeLongBreakValue, longBreakChoice, onChangeShortBreakValue}) {
    return (
        <fieldset className="settings__time">
            <h3>TIME (MINUTES)</h3>
            <section className="settings__time-picker">
                <TimeSetterItem
                    name="pomodoro"
                    text="pomodoro"
                    value={pomodoroChoice}
                    onChangeValue={onChangePomodoroValue}/>
                <TimeSetterItem
                    name="shortBreak"
                    text="short break"
                    value={shortBreakChoice}
                    onChangeValue={onChangeShortBreakValue}/>
                <TimeSetterItem
                    name="longBreak"
                    text="long break"
                    value={longBreakChoice}
                    onChangeValue={onChangeLongBreakValue}/>
            </section>
        </fieldset>
    )
}
