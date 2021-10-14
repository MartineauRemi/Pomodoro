import React, {useState} from 'react'
import FontPicker from './FontPicker'
import ColorPicker from './ColorPicker'
import TimerSetters from './TimerSetters'
import { useTimerContext } from '../../contexts/TimerProvider'

export default function Settings({activeSettingsModal, setActiveSettingsModal, activeColor, setActiveColor, setActiveFont}) {

    const {
        timerType,
        pomodoroTimer,
        setPomodoroTimer,
        shortBreakTimer,
        setShortBreakTimer,
        longBreakTimer,
        setLongBreakTimer,
        switchTimerInitialValue
    } = useTimerContext()

    const [fontChoice, setFontChoice] = useState('kumbh')
    const [colorChoice, setColorChoice] = useState('red')
    const [pomodoroChoice, setPomodoroChoice] = useState(pomodoroTimer)
    const [shortBreakChoice, setShortBreakChoice] = useState(shortBreakTimer)
    const [longBreakChoice, setLongBreakChoice] = useState(longBreakTimer)

    //onClick events 
    function onClickCloseBtn(){
        setActiveSettingsModal(!activeSettingsModal)
    }

    //onChange events
    const onChangePomodoroValue = (time) => setPomodoroChoice(time)
    const onChangeShortBreakValue = (time) => setShortBreakChoice(time)
    const onChangeLongBreakValue = (time) => setLongBreakChoice(time)

    const onSubmitSettings = (e) => {
        e.preventDefault()
 
        setActiveFont(fontChoice)
        setActiveColor(colorChoice)
        
        setPomodoroTimer(pomodoroChoice)
        setShortBreakTimer(shortBreakChoice)
        setLongBreakTimer(longBreakChoice)
 
        switchTimerInitialValue(timerType,  pomodoroChoice, shortBreakChoice, longBreakChoice)
        setActiveSettingsModal(false)
    }

    return (
    <div className={`settings ${activeSettingsModal? "settings--active" : ""}`}>
        <form
            className="settings__content"
            onSubmit={onSubmitSettings}
        >
            <h2>Settings</h2>
            <button
                className="settings__close-btn"
                type="button"
                onClick={onClickCloseBtn}
            />

            <TimerSetters
                pomodoroChoice={pomodoroChoice}
                onChangePomodoroValue={onChangePomodoroValue}
                longBreakChoice={longBreakChoice}
                onChangeLongBreakValue={onChangeLongBreakValue}
                shortBreakChoice={shortBreakChoice}
                onChangeShortBreakValue={onChangeShortBreakValue}
            />

            <FontPicker
                fontChoice={fontChoice}
                setFontChoice={setFontChoice}
            />
            <ColorPicker
                colorChoice={colorChoice}
                setColorChoice={setColorChoice}
            />
            <input
                type="submit"
                className={`settings__submit-btn settings__submit-btn--${activeColor}`}
                value="Apply"
            />
        </form>
    </div>
    )
}
