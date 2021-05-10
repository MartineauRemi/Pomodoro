import React, {useState} from "react"
import Nav from './components/Nav';
import Timer from './components/Timer';
import './styles/css/styles.css';
import settingsIcon from "./assets/icon-settings.svg";
import Settings from './components/Settings';

function App() {  
  const INITIAL_POMODORO_VALUE = 25
  const INITIAL_SHORT_BREAK_VALUE = 5
  const INITIAL_LONG_BREAK_VALUE = 15

  //toggle the Settings menu
  const [activeSettingsModal, setActiveSettingsModal] = useState(false)
  const onClickSettingsBtn = () => setActiveSettingsModal(!activeSettingsModal)

  //Timers values
  const [pomodoroValue, setPomodoroValue] = useState(INITIAL_POMODORO_VALUE)
  const [shortBreakValue, setShortBreakValue] = useState(INITIAL_SHORT_BREAK_VALUE)
  const [longBreakValue, setLongBreakValue] = useState(INITIAL_LONG_BREAK_VALUE)

  //Active color and font in the entire application
  const [activeColor, setActiveColor] = useState('red')
  const [activeFont, setActiveFont] = useState('kumbh')

  /**
   * There are 3 differents timers that can countdown in parallel.
   * However, only one at a time will be displayed on the user's screen.
   * The Nav (and NavItems) components will allow the user to chose which timer to display
   * 'navItemActive' is here to tell which timer is displayed
   */
  const [navItemActive, setNavItemActive] = useState('pomodoro')
  
  return (
    <div className={`App App--${activeFont}`}>
      <h2 className="title">pomodoro</h2>
      <Nav
        color={activeColor}
        navItemActive={navItemActive}
        setNavItemActive={setNavItemActive}
      />
      <Timer
        navItemActive={navItemActive}
        timerInitialValue={pomodoroValue}
        name="pomodoro"
        activeColor={activeColor}
      />

      <Timer
        navItemActive={navItemActive}
        timerInitialValue={shortBreakValue}
        name="shortBreak"
        activeColor={activeColor}
      />

      <Timer
        navItemActive={navItemActive}
        timerInitialValue={longBreakValue}
        name="longBreak"
        activeColor={activeColor}
      />

      <Settings
        activeSettingsModal={activeSettingsModal}
        setActiveSettingsModal={setActiveSettingsModal}
        pomodoroValue={pomodoroValue}
        setPomodoroValue={setPomodoroValue}
        shortBreakValue={shortBreakValue}
        setShortBreakValue={setShortBreakValue}
        longBreakValue={longBreakValue}
        setLongBreakValue={setLongBreakValue}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        activeFont={activeFont}
        setActiveFont={setActiveFont}
        />
      
      <button className="btn btn--settings" onClick={onClickSettingsBtn}>
        <img src={settingsIcon} alt="settings icon" />
      </button>
    </div>
  );
}

export default App;
