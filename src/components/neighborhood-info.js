'use strict'

import React, {PropTypes} from 'react'
const propTypes = {
  neighborhood: PropTypes.shape({id: PropTypes.number}),
  nearbyNeighborhoods: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number}))
}

function NeighborhoodInfo ({neighborhood, nearbyNeighborhoods}) {
  const {center_lat_lng: latlng} = neighborhood
  return (
    <div className='neighborhoods-card'>
      <div className='neighborhoods-cardTitle'>
        <h3>{neighborhood.name}</h3>
        <small>Neighborhood</small>
        <p>Lat ({latlng[0]}°), Lng ({latlng[1]}°)</p>
        <label>Nearby Neighborhoods</label>
      </div>
      <div className='neighborhoods-nearbyWrapper'>
      {nearbyNeighborhoods.map((n, index) => {
        return (
          <div
            className='neighborhoods-nearby'
            key={`info-${index}`}
          >
            <p>{n.name}</p>
          </div>
        )
      })}
      </div>
    </div>
  )
}

NeighborhoodInfo.propTypes = propTypes

export {NeighborhoodInfo}
