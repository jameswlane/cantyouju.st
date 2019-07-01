import React from 'react'
import classNames from 'classnames'
import './styles.css'

export default function(props) {
  const { children, className } = props
  const formatting = ['overlay', 'clearfix']
  const classes = classNames('main-nav', formatting, className)

  return <nav className={classes}>{children}</nav>
}
