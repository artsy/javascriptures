import React from 'react'
import { connect } from 'react-redux'

const state = ({ app }) => ({
  status: app.darkMode ? 'enabled' : 'disabled'
})

export const DarkModeStatus = connect(state)(({ status }) => {
  return <span> ({status})</span>
})
