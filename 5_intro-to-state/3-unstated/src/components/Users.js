import React from 'react'
import { Subscribe } from 'unstated'
import { AppState } from '../state'

export const Users = () => {
  return (
    <Subscribe to={[ AppState ]}>
      {app => {
        return (
          <ul className='users'>
            {app.state.users.map((user, index) => {
              return (
                <li key={index}>
                  {user}
                </li>
              )
            })}
          </ul>
        )
      }}
    </Subscribe>
  )
}
