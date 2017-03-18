import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signout extends Component {

  componentWillMount() {
    this.props.signoutUser()
  }

  render() {
    return (
      <div className="container">
        <h2>Signed out</h2>
        <p>You are now signed out.</p>
      </div>
    )
  }
}

export default connect(null, actions)(Signout)
