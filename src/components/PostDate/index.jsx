import React from 'react'
import moment from 'moment'
import './styles.css'

export default function(props) {
  const { date } = props
  return (
    <time
      className="post-date"
      dateTime={moment(new Date(date)).format('YYYY-MM-DD')}
    >
      {moment(new Date(date)).format('DD MMMM YYYY')}
    </time>
  )
}
