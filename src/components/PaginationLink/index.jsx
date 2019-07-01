import React from 'react'
import { Link } from 'gatsby'

export default function(props) {
  const { url } = props
  if (url) {
    let className = 'nav-link'
    if (props.className) {
      className = `${className} ${props.className}`
    }

    // Clone this.props and then delete Component specific
    // props so we can spread the rest into the img.
    const { ...rest } = props
    delete rest.style
    delete rest.className
    delete rest.text
    delete rest.url

    return (
      <Link to={props.url} {...rest} className={className}>
        {props.text}
      </Link>
    )
  }
  return null
}
