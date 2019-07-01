import React from 'react'
import Helmet from 'react-helmet'
import About from '../components/About'
import config from '../../data/SiteConfig'

export default function AboutPage() {
  return (
    <div className="about-container">
      <Helmet title={`About | ${config.siteTitle}`}/>
      <About/>
    </div>
  )
}
