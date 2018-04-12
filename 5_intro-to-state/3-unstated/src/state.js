import { Container } from 'unstated'
import { http } from './utils/http'

export class AppState extends Container {
  state = {
    darkMode: false,
    isFetching: false,
    users: []
  };

  toggleDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  async fetchUsers() {
    this.setState({
      isFetching: true
    })

    try {
      const users = await http.get('/users')

      this.setState({
        isFetching: false,
        users
      })
    } catch (error) {
      console.error(error) // eslint-disable-line

      this.setState({
        isFetching: false
      })
    }
  }
}
