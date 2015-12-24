'use strict'

import React, {PropTypes} from 'react'
import paths from 'vsvg-paths'
const propTypes = {
  bounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  project: PropTypes.func,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

function Neighborhood ({bounds, project, active, onSelect}) {
  const _path = bounds.map((point) => {
    const lnglat = project([+point[1], +point[0]])
    return { x: lnglat[0], y: lnglat[1] }
  })
  _path.push({}) // close path
  return (
    <path
      onClick={onSelect}
      className={`neighborhood-path ${active ? 'is-active' : ''}`}
      d={paths.encode(_path)}
    />
  )
}

Neighborhood.propTypes = propTypes

export {Neighborhood}
