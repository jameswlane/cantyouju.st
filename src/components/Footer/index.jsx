import React from 'react'
import './styles.css'

export default function(props) {
  const PoweredBy = props => {
    const { show } = props
    if (show) {
      return (
        <section className="poweredby">
          Proudly published with <a href="https://gatsbyjs.org">Gatsby</a>
        </section>
      )
    }
    return null
  }

  const { promoteGatsby } = props
  const { label, url, year } = props.copyright
  return (
    <footer className="site-footer clearfix">
      <section className="copyright">
        <a href={url || '/'}>{label}</a> &copy;{' '}
        {year || new Date().getFullYear()}
      </section>
      <PoweredBy show={promoteGatsby}/>
    </footer>
  )
}
