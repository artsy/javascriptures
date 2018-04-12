import React from 'react'
import { connect } from 'react-redux'

const state = ({ app }) => ({
  users: app.users
})

export const Users = connect(state)(props => {
  return (
    <ul className='users'>
      {props.users.map((user, index) => {
        return (
          <li key={index}>
            {user}
          </li>
        )
      })}
    </ul>
  )
})
