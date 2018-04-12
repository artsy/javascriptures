import React, { Component } from 'react'
import { ToggleButton } from './ToggleButton'
import { hot } from 'react-hot-loader'

export const App = hot(module)(class App extends Component {
  state = {
    darkMode: false
  }

  toggleDarkMode = () => {
    const darkMode = !this.state.darkMode

    this.setState({
      darkMode
    })
  }

  render() {
    const backgroundColor = this.state.darkMode ? 'black' : 'white'

    return (
      <div style={{ backgroundColor }} className="container">
        <ToggleButton
          onClick={this.toggleDarkMode}
          darkMode={this.state.darkMode}
        />
      </div>
    )
  }
})
