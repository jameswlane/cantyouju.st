import React from 'react'
import PaginationLink from '../PaginationLink'
import './styles.css'

export default function(props) {
  const { page, pages, prev, next } = props
  return (
    <nav className="pagination">
      <PaginationLink
        className="newer-posts"
        url={prev}
        text="← Newer Posts"
      />
      <span className="page-number">
          Page {page} of {pages}
        </span>
      <PaginationLink
        className="older-posts"
        url={next}
        text="Older Posts →"
      />
    </nav>
  )
}
