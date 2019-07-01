import React from 'react'
import './styles.css'

export default function(props) {
  const { children, className } = props
  return <article className={className}>{children}</article>
}
