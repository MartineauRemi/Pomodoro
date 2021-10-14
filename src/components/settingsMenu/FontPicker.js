import React from 'react'
import FontBtn from './FontBtn'

export default function FontPicker({fontChoice, setFontChoice}) {
    const fonts = ['kumbh', 'roboto', 'space']

    return (
        <fieldset className="settings__font">
                <h3>FONT</h3>
                <section className="settings__font-picker">
                    {fonts.map(font => (
                        <FontBtn
                            key={font}
                            font={font}
                            fontChoice={fontChoice}
                            setFontChoice={setFontChoice}
                        />
                    ))}
                </section>
        </fieldset>
    )
}
