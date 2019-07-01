import React from 'react'
import './styles.css'

export default function(props) {
  const { name } = props
  if (name) {
    return <h1 className="author-title">{name}</h1>
  }
  return null
}
