import React from 'react'
import './styles.css'

export default function(props) {
  const { children } = props
  return <footer className="post-footer">{children}</footer>
}
