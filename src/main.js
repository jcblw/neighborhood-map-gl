'use strict'

import React from 'react'
import {App} from './components/app'
import ReactDOM from 'react-dom'
import neighborhoods from '../data/neighborhood.json'
import nearbyIndexs from '../data/nearby-indexs.json'
import querystring from 'querystring'
const query = querystring.parse(window.location.search.split('?').pop())
const blackList = [14727, 14725, 14726]
// const [neighborhood] = neighborhoods

const _neighborhoods = neighborhoods
  .sort((n, n2) => {
    return n.id < n2.id // sort gives biggest first
  })
  .filter((n) => {
    return blackList.indexOf(n.id) === -1
  })

const viewport = {
  width: window.innerWidth,
  height: window.innerHeight,
  latitude: 34.0500,
  longitude: -118.2500,
  neighborhoods: _neighborhoods,
  nearbyIndexs,
  zoom: 8,
  mapboxApiAccessToken: query.token
}

ReactDOM.render(
  <App title='Neighborhood Maps' viewport={viewport} />,
  document.getElementById('app')
)
