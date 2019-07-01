import React from 'react'

export default function SubscribeButton(props) {
  const { url } = props
  if (url) {
    return (
      <a className="subscribe-button icon-feed" href={url}>
        Subscribe
      </a>
    )
  }
  return null
}
