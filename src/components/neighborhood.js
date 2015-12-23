'use strict'

import React, {PropTypes} from 'react'
import paths from 'vsvg-paths'
const propTypes = {
  bounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  project: PropTypes.func
}

function Neighborhood ({bounds, project}) {
  const _path = bounds.map((point) => {
    const lnglat = project([+point[1], +point[0]])
    return { x: lnglat[0], y: lnglat[1] }
  })
  _path.push({}) // close path
  return (
    <path
      d={paths.encode(_path)}
      fill='rgba(255,255,0,.5)'
      stroke='rgb(255,255,0)'
      strokeWidth='2px'
    />
  )
}

Neighborhood.propTypes = propTypes

export {Neighborhood}
