import React from 'react'
import classNames from 'classnames'
import './styles.css'

export default function(props) {
  const { children, className } = props
  const classes = classNames('author-meta', className)

  return <div className={classes}>{children}</div>
}
