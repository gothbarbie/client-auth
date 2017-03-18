import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import Welcome from './components/Welcome'
import Signin from './components/Auth/Signin'
import Signout from './components/Auth/Signout'
import Signup from './components/Auth/Signup'
import Feature from './components/Feature'
import RequireAuth from './components/Auth/Authentication'
import reducers from './reducers'

import { AUTH_USER } from './actions/types'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('token')
if (token) {
  // Sign in
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin"  component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup"  component={Signup} />
        <Route path="feature" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
