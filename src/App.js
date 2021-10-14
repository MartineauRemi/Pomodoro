import React, { useState, useEffect } from "react"
import Nav from './components/nav/Nav';
import Timer from './components/timer/Timer';
import './styles/css/styles.css';
import settingsIcon from "./assets/icon-settings.svg";
import Settings from './components/settingsMenu/Settings';
import { useTimerContext } from "./contexts/TimerProvider";

function App() {
  //toggle the Settings menu
  const [activeSettingsModal, setActiveSettingsModal] = useState(false)
  const onClickSettingsBtn = () => setActiveSettingsModal(!activeSettingsModal)

  const {timerInitialValue} = useTimerContext()

  //Active color and font in the entire application
  const [activeColor, setActiveColor] = useState('red')
  const [activeFont, setActiveFont] = useState('kumbh')

  useEffect(() => {
  }, [timerInitialValue])
  
  return (
    <div className={`App App--${activeFont}`}>
      <h2 className="title">pomodoro</h2>
      <Nav color={activeColor} />
      <Timer activeColor={activeColor} />

      <Settings
        activeSettingsModal={activeSettingsModal}
        setActiveSettingsModal={setActiveSettingsModal}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        activeFont={activeFont}
        setActiveFont={setActiveFont}
      />
      
      <button
        className="btn btn--settings"
        onClick={onClickSettingsBtn}
      >
        <img src={settingsIcon} alt="settings icon" />
      </button>
    </div>
  );
}

export default App;
