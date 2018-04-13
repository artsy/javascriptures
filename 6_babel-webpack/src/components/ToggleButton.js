import React from 'react'
import { DarkModeStatus } from './DarkModeStatus'

export function ToggleButton(props) {
  const { darkMode, onClick } = props

  return (
    <div className="toggle">
      <button className="toggleButton" onClick={onClick}>
        Toggle DarkMode <DarkModeStatus darkMode={darkMode} />
      </button>
    </div>
  )
}
