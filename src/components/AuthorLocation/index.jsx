import React from 'react'

export default function(props) {
  const { location } = props
  if (location) {
    return <span className="author-location icon-location">{location}</span>
  }
  return null
}
