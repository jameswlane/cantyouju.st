import React from 'react'
import './styles.css'

export default function(props) {
  const { children } = props
  return <header className="post-header">{children}</header>
}
