import React from 'react'
import { Link } from 'gatsby'
import './styles.css'

export default function(props) {
  const { logo, url, title } = props
  if (logo) {
    return (
      <Link className="blog-logo" to={url || '/'}>
        {/* style={{ boxShadow: "none" }}> */}
        <img src={logo} alt={title}/>
      </Link>
    )
  }
  return null
}
