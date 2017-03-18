import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage()
  }

  render() {
    return (
      <div>
        <h2>Feature</h2>
        <p>This is a very secret page.</p>
        <div className="alert alert-warning">{this.props.message}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message }
}

export default connect(mapStateToProps, actions)(Feature)
