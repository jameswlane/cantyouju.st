import React from 'react'
import './styles.css'

export default function(props) {
  const { text } = props
  if (text) {
    return <h2 className="page-description">{text}</h2>
  }
  return null
}
