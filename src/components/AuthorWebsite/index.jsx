import React from 'react'

export default function(props) {
  const { url } = props
  if (url) {
    return (
      <span className="author-link icon-link">
          <a href={url}>{url}</a>
        </span>
    )
  }
  return null
}
