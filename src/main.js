'use strict'

import React from 'react'
import {App} from './components/app'
import ReactDOM from 'react-dom'
import neighborhoods from '../data/neighborhood.json'
import querystring from 'querystring'
const query = querystring.parse(window.location.search.split('?').pop())
const [neighborhood] = neighborhoods
const viewport = {
  width: window.innerWidth,
  height: window.innerHeight,
  latitude: neighborhood.center_lat_lng[0],
  longitude: neighborhood.center_lat_lng[1],
  neighborhoods,
  zoom: 11,
  mapboxApiAccessToken: query.token
}

ReactDOM.render(
  <App title='Neighborhood Maps' viewport={viewport} />,
  document.getElementById('app')
)
