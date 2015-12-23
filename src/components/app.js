'use strict'

import React, {Component, PropTypes} from 'react'
import {Map} from './map'
const propTypes = {
  title: PropTypes.string
}

class App extends Component {
  render () {
    const {viewport} = this.props
    return (
      <Map viewport={viewport} />
    )
  }
}
App.propTypes = propTypes

export {App}
