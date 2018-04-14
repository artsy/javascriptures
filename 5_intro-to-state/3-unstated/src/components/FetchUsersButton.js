import React from 'react'
import { Subscribe } from 'unstated'
import { AppState } from '../state'

export const FetchUsersButton = () => {
  return (
    <Subscribe to={[ AppState ]}>
      {app => {
        const isFetching = app.state.isFetching

        return (
          <div className="toggle">
            <button className="toggleButton" onClick={() => app.fetchUsers()}>
              { isFetching ? 'Fetching...' : 'Fetch Users' }
            </button>
          </div>
        )
      }}
    </Subscribe>
  )
}
