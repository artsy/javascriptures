import React from 'react'
import { Subscribe } from 'unstated'
import { AppState } from '../state'

export const DarkModeStatus = () => {
  return (
    <Subscribe to={[ AppState ]}>
      {app => {
        const status = app.state.darkMode ? 'enabled' : 'disabled'

        return (
          <span> ({status})</span>
        )
      }}
    </Subscribe>
  )
}
