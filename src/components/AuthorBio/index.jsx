import React from 'react'
import './styles.css'

export default function(props) {
  const { bio } = props
  if (bio) {
    return <h2 className="author-bio">{bio}</h2>
  }
  return null
}
