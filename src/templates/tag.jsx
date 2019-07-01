import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer";
import Navigation from "../components/Navigation";
import SiteWrapper from "../components/SiteWrapper";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";
import BlogLogo from "../components/BlogLogo";
import MenuButton from "../components/MenuButton";
import PageTitle from "../components/PageTitle";
import PageDescription from "../components/PageDescription";
import Footer from "../components/Footer";
import PaginatedContent from "../components/PaginatedContent";
import Layout from "../components/layout";

class TagTemplate extends React.Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const {
      tag,
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pageContext;
    const authorsEdges = this.props.data.authors.edges;
    return (
      <Layout location={this.props.location}>
        <Drawer isOpen={this.state.menuOpen}>
          <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />
          <SiteWrapper>
            {/* All the main content gets inserted here */}
            <div className="tag-template">
              {/* The big featured header */}
              <MainHeader className="tag-head" cover={tag.featureImage}>
                <MainNav>
                  <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                  <MenuButton
                    navigation={config.siteNavigation}
                    onClick={this.handleOnClick}
                  />
                </MainNav>
                <div className="vertical">
                  <div className="main-header-content inner">
                    <PageTitle text={tag} />
                    <PageDescription
                      text={tag.description || `A ${total}-post collection`}
                    />
                  </div>
                </div>
              </MainHeader>

              <PaginatedContent
                page={page}
                pages={pages}
                total={total}
                limit={limit}
                prev={prev}
                next={next}
              >
                {/* PostListing component renders all the posts */}
                <PostListing postEdges={nodes} postAuthors={authorsEdges} />
              </PaginatedContent>
            </div>
            {/* The tiny footer at the very bottom */}
            <Footer
              copyright={config.copyright}
              promoteGatsby={config.promoteGatsby}
            />
          </SiteWrapper>
        </Drawer>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query TagPage($tag: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
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

export default TagTemplate;
