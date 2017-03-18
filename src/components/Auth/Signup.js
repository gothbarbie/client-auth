import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'


class Signup extends Component {

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props

    return (
      <div className="container">
        <h2>Signup</h2>
        <form>
          <fieldset className="form-group">
            <label>Email:</label>
            <input className="form-control" {...email} type="email" />
          </fieldset>

          <fieldset className="form-group">
            <label>Password:</label>
            <input className="form-control" {...password} type="password" />
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password:</label>
            <input className="form-control" {...passwordConfirm} type="password" />
          </fieldset>

          <button action="submit" className="btn btn-primary">Sign up</button>
        </form>
      </div>
    )
  }
}


export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
})(Signup)
