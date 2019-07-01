import React from 'react'
import { Link } from 'gatsby'

export default function(props) {
  const { name, url } = props
  if (name && url) {
    return <Link to={url}>{name}</Link>
  }
  return null
}
