import React from 'react'
import ColorBtn from './ColorBtn'

export default function ColorPicker({colorChoice, setColorChoice}) {
    const colors = ['red', 'turquoise', 'purple']
    
    return (
        <fieldset className="settings__color">
            <h3>COLOR</h3>
            <section className="settings__color-picker">
                {colors.map(color => (
                    <ColorBtn
                        key={color}
                        color={color}
                        colorChoice={colorChoice}
                        setColorChoice={setColorChoice}
                    />
                ))}
            </section>
        </fieldset>
    )
}
