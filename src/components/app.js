'use strict'

import React, {Component, PropTypes} from 'react'
import {Map} from './map'
const propTypes = {
  title: PropTypes.string
}

class App extends Component {
  constructor (props) {
    super(props)
    this.onNeighborhoodSelect = this.onNeighborhoodSelect.bind(this)
    this.onChangeViewport = this.onChangeViewport.bind(this)
    this.state = props
  }

  onNeighborhoodSelect (neighborhood) {
    // console.log(neighborhood)
    const latlng = neighborhood.center_lat_lng
    const {neighborhoods: n, nearbyIndexs} = this.props.viewport
    const neighborhoods = n.filter((_n) => nearbyIndexs[neighborhood.id].indexOf(_n.id) !== -1)
    const viewport = Object.assign({}, this.state.viewport, {
      latitude: latlng[0],
      longitude: latlng[1],
      neighborhoods,
      zoom: 10,
      activeNeighborhood: neighborhood.id
    })
    this.setState({viewport})
  }

  onChangeViewport (change) {
    // console.log('changes', ...args)
    const viewport = Object.assign({}, this.state.viewport, change)
    this.setState({viewport})
  }

  render () {
    const {viewport} = this.state
    return (
      <Map
        viewport={viewport}
        onNeighborhoodSelect={this.onNeighborhoodSelect}
        onChangeViewport={this.onChangeViewport}
      />
    )
  }
}
App.propTypes = propTypes

export {App}
