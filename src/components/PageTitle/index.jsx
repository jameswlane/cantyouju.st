import React from 'react'
import './styles.css'

export default function(props) {
  const { text } = props
  if (text) {
    return <h1 className="page-title">{text}</h1>
  }
  return null
}
