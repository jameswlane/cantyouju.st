import React from 'react'
import classNames from 'classnames'
import './styles.css'

export default function(props) {
  const { children, className } = props
  const classes = classNames('author-profile', className)

  return <section className={classes}>{children}</section>
}
