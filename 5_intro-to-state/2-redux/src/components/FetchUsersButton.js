import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const state = ({ app }) => ({
  isFetching: app.isFetching
})

const appActions = {
  fetchUsersAction: actions.fetchUsers
}

export const FetchUsersButton = connect(state, appActions)(props => {
  const { fetchUsersAction, isFetching } = props

  return (
    <div className="toggle">
      <button className="toggleButton" onClick={fetchUsersAction}>
        { isFetching ? 'Fetching...' : 'Fetch Users' }
      </button>
    </div>
  )
})
