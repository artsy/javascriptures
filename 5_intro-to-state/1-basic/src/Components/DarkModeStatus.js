import React from 'react'

export function DarkModeStatus(props) {
  const status = props.darkMode ? 'enabled' : 'disabled'

  return <span>({status})</span>
}
