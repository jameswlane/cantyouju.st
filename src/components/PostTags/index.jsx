import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'

export default function(props) {
  const { prefix, tags } = props
  if (tags) {
    return (
      <span>
          {prefix}
        {tags.map((tag, index, arr) => (
          <span key={tag}>
              <Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>
                {tag}
              </Link>
            {index !== arr.length - 1 ? ', ' : ''}
            </span>
        ))}
        </span>
    )
  }
  return null
}
