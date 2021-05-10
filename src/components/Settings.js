import React, {useState} from 'react'
import ColorBtn from './ColorBtn'
import FontBtn from './FontBtn'
import TimeItem from './TimeItem'

export default function Settings({activeSettingsModal, setActiveSettingsModal, pomodoroValue, setPomodoroValue, shortBreakValue, setShortBreakValue, longBreakValue, setLongBreakValue, activeColor, setActiveColor, setActiveFont}) {
    const [fontChoice, setFontChoice] = useState('kumbh')
    const [colorChoice, setColorChoice] = useState('red')
    const [pomodoroChoice, setPomodoroChoice] = useState(pomodoroValue)
    const [shortBreakChoice, setShortBreakChoice] = useState(shortBreakValue)
    const [longBreakChoice, setLongBreakChoice] = useState(longBreakValue)

    //onClick events 
    const onClickCloseBtn = () => setActiveSettingsModal(!activeSettingsModal)
    const onClickColorBtn = (color) => setColorChoice(color)
    const onClickFontBtn = (font) => setFontChoice(font)

    //onChange events
    const onChangePomodoroValue = (time) => setPomodoroChoice(time)
    const onChangeShortBreakValue = (time) => setShortBreakChoice(time)
    const onChangeLongBreakValue = (time) => setLongBreakChoice(time)


    //form submit
    const onSubmitSettings = (e) => {
        e.preventDefault()
        setActiveFont(fontChoice)
        setActiveColor(colorChoice)
        setPomodoroValue(pomodoroChoice)
        setShortBreakValue(shortBreakChoice)
        setLongBreakValue(longBreakChoice)
        setActiveSettingsModal(!activeSettingsModal)
    }

    return (
    <div className={`settings ${activeSettingsModal? "settings--active" : ""}`}>
        <form className="settings__content" onSubmit={onSubmitSettings}>
            <h2>Settings</h2>
            <button className="settings__close-btn" type="button" onClick={onClickCloseBtn}></button>

            <fieldset className="settings__time">
                <h3>TIME (MINUTES)</h3>
                <section className="settings__time-picker">
                    <TimeItem
                        name="pomodoro"
                        text="pomodoro"
                        value={pomodoroChoice}
                        onChangeValue={onChangePomodoroValue}/>
                    <TimeItem
                        name="shortBreak"
                        text="short break"
                        value={shortBreakChoice}
                        onChangeValue={onChangeShortBreakValue}/>
                    <TimeItem
                        name="longBreak"
                        text="long break"
                        value={longBreakChoice}
                        onChangeValue={onChangeLongBreakValue}/>
                </section>
            </fieldset>

            <fieldset className="settings__font">
                <h3>FONT</h3>
                <section className="settings__font-picker">
                    <FontBtn font='kumbh' fontChoice={fontChoice} onClickFontBtn={onClickFontBtn} />
                    <FontBtn font='roboto' fontChoice={fontChoice} onClickFontBtn={onClickFontBtn} />
                    <FontBtn font='space' fontChoice={fontChoice} onClickFontBtn={onClickFontBtn} />
                </section>
            </fieldset>

            <fieldset className="settings__color">
                <h3>COLOR</h3>
                <section className="settings__color-picker">
                    <ColorBtn color="red" colorChoice={colorChoice} onClickColorBtn={onClickColorBtn}/>
                    <ColorBtn color="turquoise" colorChoice={colorChoice} onClickColorBtn={onClickColorBtn}/>
                    <ColorBtn color="purple" colorChoice={colorChoice} onClickColorBtn={onClickColorBtn}/>
                </section>
            </fieldset>
            <input type="submit" className={`settings__submit-btn settings__submit-btn--${activeColor}`} value="Apply" />
        </form>
    </div>
    )
}
