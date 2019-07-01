import React from 'react'
import './styles.css'

export default function(props) {
  const { author: { name, image, url } } = props
  if (image) {
    return (
      <figure className="author-image">
        <a
          className="img"
          href={url}
          style={{ backgroundImage: `url("${image}")` }}
        >
          <span className="hidden">{`${name}'s Picture`}</span>
        </a>
      </figure>
    )
  }
  return null
}
