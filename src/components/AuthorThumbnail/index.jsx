import React from 'react'
import './styles.css'

export default function(props) {
  const { avatar, name } = props
  if (avatar && name) {
    return (
      <img
        className="author-thumb"
        src={avatar}
        alt={name}
        data-pin-nopin="true"
      />
    )
  }
  return null
}
