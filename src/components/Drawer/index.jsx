import React from 'react'
import classNames from 'classnames'

export default function(props) {
  const { children, isOpen, className } = props

  const getClassName = isOpened => (isOpened ? 'nav-opened' : 'nav-closed')
  const classes = classNames(className, getClassName(isOpen))

  return <div className={classes}>{children}</div>
}
