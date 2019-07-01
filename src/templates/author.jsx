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
import AuthorImage from "../components/AuthorImage";
import AuthorProfile from "../components/AuthorProfile";
import AuthorName from "../components/AuthorName";
import AuthorBio from "../components/AuthorBio";
import AuthorMeta from "../components/AuthorMeta";
import AuthorLocation from "../components/AuthorLocation";
import AuthorWebsite from "../components/AuthorWebsite";
import AuthorStats from "../components/AuthorStats";
import Footer from "../components/Footer";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Layout from "../components/layout";

class AuthorTemplate extends React.Component {
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
    const { author, cover } = this.props.pageContext;
    const postEdges =
      this.props.data.allMarkdownRemark &&
      this.props.data.allMarkdownRemark.edges
        ? this.props.data.allMarkdownRemark.edges
        : [];
    const authorsEdges =
      this.props.data.allAuthorsJson && this.props.data.allAuthorsJson.edges
        ? this.props.data.allAuthorsJson.edges
        : [];
    const getAuthor = () => authorsEdges[0].node;

    return (
      <Layout location={this.props.location}>
        <Drawer className="author-template" isOpen={this.state.menuOpen}>
          <Helmet title={`Posts by "${author}" | ${config.siteTitle}`} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />

          <SiteWrapper>
            <MainHeader className="author-head" cover={cover}>
              <MainNav>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton
                  navigation={config.siteNavigation}
                  onClick={this.handleOnClick}
                />
              </MainNav>
            </MainHeader>

            <AuthorProfile className="inner">
              <AuthorImage author={getAuthor()} />
              <AuthorName name={getAuthor().name} />
              <AuthorBio bio={getAuthor().bio} />
              <AuthorMeta>
                <AuthorLocation location={getAuthor().location} />
                <AuthorWebsite url={getAuthor().url} />
              </AuthorMeta>
              <AuthorStats postEdges={postEdges} />
            </AuthorProfile>

            {/* PostListing component renders all the posts */}
            <PostListing postEdges={postEdges} postAuthors={authorsEdges} />

            {/* Social information here */}
            <SocialMediaIcons urls={getAuthor().socialUrls} />

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
    query AuthorPage($author: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { author: { eq: $author } } }
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
                        author
                    }
                }
            }
        }
        allAuthorsJson(filter: { uid: { eq: $author } }) {
            edges {
                node {
                    uid
                    name
                    image
                    url
                    bio
                    location
                    socialUrls
                }
            }
        }
    }
`;

export default AuthorTemplate;
