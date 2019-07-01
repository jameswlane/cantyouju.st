import React from 'react'
import classNames from 'classnames'
import './styles.css'

export default function(props) {
  const { children, cover } = props

  const classes = classNames('main-header', props.className, {
    'no-cover': !cover,
  })

  const getStyle = () => {
    if (cover) {
      return { backgroundImage: `url("${cover}")` }
    }
    return null
  }

  return (
    <header className={classes} style={getStyle()}>
      {children}
    </header>
  )
}
