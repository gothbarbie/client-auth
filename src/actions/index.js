import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types'

const API_URL = 'http://localhost:3090'

export function signinUser({ email, password }) {

  return function(dispatch) {
    // Submit to server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        // Update state to authenticated
        dispatch({ type: AUTH_USER })
        // Save JWT token
        localStorage.setItem('token', response.data.token)
        // Redirect to /feature
        browserHistory.push('/feature')
      })
      .catch(() => {
        // Set error
        dispatch(authError('Wrong credentials'))
      })

  }

}

export function signupUser({ email, password }) {

  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/feature')
      })
      .catch(response => dispatch({ type: AUTH_ERROR, payload: response.data.error }))
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token')

  return { type: UNAUTH_USER }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(API_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        // console.log(response)
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
