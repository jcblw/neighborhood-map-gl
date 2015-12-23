'use strict'

import React, {Component, PropTypes} from 'react'
import MapGL from 'react-map-gl'
import SVGOverlay from 'react-map-gl/src/overlays/svg.react'
import {Neighborhood} from './neighborhood'
const propTypes = {
  title: PropTypes.string
}

class Map extends Component {
  render () {
    const {viewport} = this.props
    return (
      <div>
        <MapGL {...viewport}>
          <SVGOverlay
            {...viewport}
            redraw={(opts) => {
              return viewport.neighborhoods.map((neighborhood) => {
                return (
                  <Neighborhood
                    key={`neighborhood-${neighborhood.id}`}
                    bounds={neighborhood.points}
                    project={opts.project}
                  />
                )
              })
            }}
            isDragging={false}
          />
        </MapGL>
      </div>
    )
  }
}
Map.propTypes = propTypes

export {Map}
