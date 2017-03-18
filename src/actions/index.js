import axios from 'axios'

const API_URL = 'http://localhost:3090'

export function signinUser({ email, password }) {

  return function(dispatch) {
    // Submit to server
    axios.post(`${API_URL}/signin`, { email, password })

    // Good:
    // - Update state to authenticated
    // - Save JWT token
    // - Redirect to /feature

    // Bad:
    // - Show error
  }


}
