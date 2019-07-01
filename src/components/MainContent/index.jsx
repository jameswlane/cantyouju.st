import React from 'react'
import classNames from 'classnames'
import './styles.css'

export default function(props) {
  const { children } = props

  const classes = classNames('content', props.className)

  return (
    <main id="content" className={classes} role="main">
      {children}
    </main>
  )
}
