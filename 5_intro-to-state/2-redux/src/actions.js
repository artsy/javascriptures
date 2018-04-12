import { http } from './utils/http'

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

export const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE
  }
}

export const fetchUsers = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_USERS_REQUEST
    })

    try {
      const users = await http.get('/users')

      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: {
          users
        }
      })
    } catch (error) {
      console.error(error) // eslint-disable-line

      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: {
          error
        }
      })
    }
  }
}
