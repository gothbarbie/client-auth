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

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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
