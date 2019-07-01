import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'
import Layout from '../components/layout'

export default function CategoryTemplate(props) {
  const category = props.pageContext.category
  const postEdges = props.data.allMarkdownRemark.edges
  const authorsEdges = props.data.authors.edges
  return (
    <Layout location={props.location}>
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <PostListing postEdges={postEdges} postAuthors={authorsEdges}/>
      </div>
    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query CategoryPage($category: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { category: { eq: $category } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        tags
                        cover
                        date
                    }
                }
            }
        }
        # authors
        authors: allAuthorsJson {
            edges {
                node {
                    uid
                    name
                    image
                    url
                    bio
                }
            }
        }
    }
`;
