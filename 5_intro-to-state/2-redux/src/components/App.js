import React from 'react'
import { ToggleButton } from './ToggleButton'
import { FetchUsersButton } from './FetchUsersButton'
import { Users } from './Users'
import { connect } from 'react-redux'

const state = ({ app }) => ({
  backgroundColor: app.darkMode ? 'black' : 'white'
})

export const App = connect(state)(props => {
  const { backgroundColor } = props

  return (
    <div style={{ backgroundColor }} className="container">
      <ToggleButton />
      <FetchUsersButton />
      <Users />
    </div>
  )
})
