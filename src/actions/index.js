import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_USER
} from './types'

const API_URL = 'http://localhost:3090'

export function signinUser({ email, password }) {

  return function(dispatch) {
    // Submit to server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        // Good:
        // - Update state to authenticated
        dispatch({ type: AUTH_USER })
        // - Save JWT token
        // - Redirect to /feature
        browserHistory.push('/feature')
      })
      .catch(() => {
        // Bad:
        // - Show error

      })



  }


}
