import * as actions from './actions'
import { combineReducers } from 'redux'

const initialState = {
  darkMode: false,
  isFetching: false,
  users: []
}

function app(state = initialState, action) {
  const update = newState => ({...state, ...newState})

  switch (action.type) {
    case actions.TOGGLE_DARK_MODE: {
      return update({
        darkMode: !state.darkMode
      })
    }
    case actions.FETCH_USERS_REQUEST: {
      return update({
        isFetching: true
      })
    }
    case actions.FETCH_USERS_FAILURE: {
      return update({
        isFetching: false
      })
    }
    case actions.FETCH_USERS_SUCCESS: {
      return update({
        isFetching: false,
        users: action.payload.users
      })
    }
    default: {
      return state
    }
  }
}

export const reducers = combineReducers({
  app
})
