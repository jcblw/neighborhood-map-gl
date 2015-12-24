'use strict'

import React, {Component, PropTypes} from 'react'
import MapGL from 'react-map-gl'
import SVGOverlay from 'react-map-gl/src/overlays/svg.react'
import HTMLOverlay from 'react-map-gl/src/overlays/html.react'
import {Neighborhood} from './neighborhood'
import {NeighborhoodInfo} from './neighborhood-info'
const propTypes = {
  title: PropTypes.string
}

class Map extends Component {
  constructor (...args) {
    super(...args)
    this.state = {}
    this.onNeighborhoodSelect = this.onNeighborhoodSelect.bind(this)
  }
  onNeighborhoodSelect (...args) {
    if (this.props.onNeighborhoodSelect) {
      this.props.onNeighborhoodSelect(...args)
    }
  }
  render () {
    const {viewport} = this.props
    return (
      <div>
        <MapGL
          {...viewport}
          startDragLngLat={[viewport.longitude, viewport.latitude]}
          onChangeViewport={this.props.onChangeViewport}
        >
          <SVGOverlay
            {...viewport}
            redraw={(opts) => {
              return viewport.neighborhoods.map((neighborhood) => {
                return (
                  <Neighborhood
                    active={viewport.activeNeighborhood === neighborhood.id}
                    key={`neighborhood-${neighborhood.id}`}
                    bounds={neighborhood.points}
                    project={opts.project}
                    onSelect={() => {
                      this.onNeighborhoodSelect(neighborhood)
                    }}
                  />
                )
              })
            }}
            isDragging={false}
          />
          <HTMLOverlay
            {...viewport}
            redraw={(opts) => {
              if (!viewport.activeNeighborhood) return
              return (
                <NeighborhoodInfo
                  neighborhood={viewport.neighborhoods.filter((n) => n.id === viewport.activeNeighborhood)[0]}
                  nearbyNeighborhoods={viewport.neighborhoods.filter((n) => n.id !== viewport.activeNeighborhood)}
                />
              )
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
