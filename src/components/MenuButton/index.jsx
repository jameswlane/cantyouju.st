import React from 'react'
import './styles.css'

export default function(props) {
  const { navigation, onClick } = props
  if (navigation && onClick) {
    return (
      <a className="menu-button icon-menu" href="#menu" onClick={onClick}>
        <span className="word">Menu</span>
      </a>
    )
  }
  return null
}
