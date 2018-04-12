import React from 'react'
import { FetchUsersButton } from './FetchUsersButton'
import { Subscribe } from 'unstated'
import { AppState } from '../state'
import { ToggleButton } from './ToggleButton'
import { Users } from './Users'

export const App = () => {
  return (
    <Subscribe to={[ AppState ]}>
      {app => {
        const backgroundColor = app.state.darkMode ? 'black' : 'white'

        return (
          <div style={{ backgroundColor }} className="container">
            <ToggleButton />
            <FetchUsersButton />
            <Users />
          </div>
        )
      }}
    </Subscribe>
  )
}
