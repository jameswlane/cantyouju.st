import React from 'react'
import './styles.css'

export default function(props) {
  const { children } = props
  return <div className="site-wrapper">{children}</div>
}
