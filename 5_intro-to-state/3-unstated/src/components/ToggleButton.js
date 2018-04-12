import React from 'react'
import { DarkModeStatus } from './DarkModeStatus'
import { Subscribe } from 'unstated'
import { AppState } from '../state'

export const ToggleButton = () => {
  return (
    <Subscribe to={[ AppState ]}>
      {app => {
        return (
          <div className="toggle">
            <button className="toggleButton" onClick={() => app.toggleDarkMode()}>
              Toggle DarkMode

              <DarkModeStatus />
            </button>
          </div>
        )
      }}
    </Subscribe>
  )
}
