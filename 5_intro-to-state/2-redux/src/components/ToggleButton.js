import React from 'react'
import { DarkModeStatus } from './DarkModeStatus'
import { connect } from 'react-redux'
import * as actions from '../actions'

const appActions = {
  toggleDarkModeAction: actions.toggleDarkMode
}

export const ToggleButton = connect(null, appActions)(props => {
  const { toggleDarkModeAction } = props

  return (
    <div className="toggle">
      <button className="toggleButton" onClick={toggleDarkModeAction}>
        Toggle DarkMode

        <DarkModeStatus />
      </button>
    </div>
  )
})
