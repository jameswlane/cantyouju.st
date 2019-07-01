import React from 'react'
import MainContent from '../MainContent'
import Pagination from '../Pagination'
import './styles.css'

export default function(props) {
  const { page, pages, prev, next, children } = props
  let className = ''
  if (page > 1) {
    className = `${className} paged`
  }
  return (
    <MainContent className={className}>
      {/* Previous/next page links - only displayed on page 2+ */}
      <div className="extra-pagination inner">
        <Pagination page={page} pages={pages} prev={prev} next={next}/>
      </div>

      {children}

      {/* Previous/next page links - displayed on every page */}
      <Pagination page={page} pages={pages} prev={prev} next={next}/>
    </MainContent>
  )
}
