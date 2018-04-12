import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { App } from './components/App'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { reducers } from './reducers'
import './index.css'

const store = createStore(reducers,
  applyMiddleware(
    createLogger({
      collapsed: true
    }),
    thunk
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
