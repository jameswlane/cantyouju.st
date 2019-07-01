import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/MainNav";
import BlogLogo from "../components/BlogLogo";
import MenuButton from "../components/MenuButton";
import Drawer from "../components/Drawer";
import Navigation from "../components/Navigation";
import SiteWrapper from "../components/SiteWrapper";
import MainContent from "../components/MainContent";
import PostHeader from "../components/PostHeader";
import PostFormatting from "../components/PostFormatting";
import PostDate from "../components/PostDate";
import PostFooter from "../components/PostFooter";
import AuthorImage from "../components/AuthorImage";
import AuthorInfo from "../components/AuthorInfo";
import PostShare from "../components/PostShare";
import GhostSubscribe from "../components/GhostSubscribe";
import ReadNext from "../components/ReadNext";
import PostTags from "../components/PostTags";
import Footer from "../components/Footer";
import AuthorModel from "../models/author-model";
import Disqus from "../components/Disqus";
import Layout from "../components/layout";

function parsePost(post, slug) {
  const result = post;
  if (!result.id) {
    result.id = slug;
  }
  if (!result.id) {
    result.category_id = config.postDefaultCategoryID;
  }
  return result;
}

const formatReadNext = value => ({
  path: value.fields.slug,
  title: value.frontmatter.title,
  cover: value.frontmatter.cover,
  excerpt: value.excerpt
});

class PostTemplate extends React.Component {
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
    const { location, data } = this.props;
    const { slug, next, prev } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = parsePost(postNode.frontmatter, slug);
    const { cover, title, date, author, tags } = post;
    const className = post.post_class ? post.post_class : "post";
    const authorData = AuthorModel.getAuthor(
      this.props.data.authors.edges,
      author,
      config.blogAuthorId
    );
    const getNextData = () => (next ? formatReadNext(data.next) : null);
    const getPrevData = () => (prev ? formatReadNext(data.prev) : null);

    return (
      <Layout location={this.props.location}>
        <Drawer className="post-template" isOpen={this.state.menuOpen}>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />

          <SiteWrapper>
            <MainHeader className="post-head" cover={cover}>
              <MainNav>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton
                  navigation={config.siteNavigation}
                  onClick={this.handleOnClick}
                />
              </MainNav>
            </MainHeader>
            <MainContent>
              <PostFormatting className={className}>
                <PostHeader>
                  <h1 className="post-title">{title}</h1>
                  <section className="post-meta">
                    <PostDate date={date} />
                    <PostTags prefix=" on " tags={tags} />
                  </section>
                </PostHeader>

                <section
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: postNode.html }}
                />

                <PostFooter>
                  <AuthorImage author={authorData} />
                  <AuthorInfo prefix="/author" author={authorData} />
                  <PostShare
                    postNode={postNode}
                    postPath={location.pathname}
                    config={config}
                  />
                  <GhostSubscribe />
                  <Disqus postNode={postNode} />
                </PostFooter>
              </PostFormatting>
            </MainContent>
            <ReadNext next={getNextData()} prev={getPrevData()} />

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
    query BlogPostBySlug($slug: String!, $next: String, $prev: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            excerpt
            frontmatter {
                title
                cover
                date
                category
                tags
                author
            }
            fields {
                slug
            }
        }
        # prev post data
        prev: markdownRemark(fields: { slug: { eq: $prev } }) {
            excerpt(pruneLength: 112)
            frontmatter {
                title
                cover
                date
            }
            fields {
                slug
            }
        }
        # next post data
        next: markdownRemark(fields: { slug: { eq: $next } }) {
            excerpt(pruneLength: 112)
            frontmatter {
                title
                cover
                date
            }
            fields {
                slug
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

export default PostTemplate;
