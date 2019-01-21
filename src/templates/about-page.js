import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, title2, content2, contentComponent, image, image2, imageBottom1, imageBottom2 }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-6 p"
            style={{
              paddingBottom: 0
            }}
          >
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
          <div className="column is-6 p"
            style={{
              paddingLeft: 0,
              paddingBottom: '0.2rem'
            }}
          >
            <div>
              <img alt="Uchida" src={!!image.childImageSharp
                      ? image.childImageSharp.fluid.src
                : image}

                style={{
                  width: '100%'
                }}
              ></img>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 p"
            style={{
              paddingRight: 0,
              paddingTop: '0.2rem'
            }}
          >
            <img alt="Uminami Farms" src={!!image2.childImageSharp
                    ? image2.childImageSharp.fluid.src
              : image2}

              style={{
                width: '100%'
              }}
            ></img>
          </div>
          <div className="column is-6 p">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title2}
              </h2>
              <div className="content" style={{
                whiteSpace: 'pre-wrap'
              }}>
                <h3>
                  {content2}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 p"
            style={{
              paddingRight: 0,
            }}
          >
            <img alt="Uminami Farms" src={!!imageBottom1.childImageSharp
                      ? imageBottom1.childImageSharp.fluid.src
              : imageBottom1}
            ></img>
          </div>
          <div className="column is-6 p"
            style={{
              paddingLeft: 0,
            }}
          >
            <img alt="Uminami Farms" src={!!imageBottom2.childImageSharp
                      ? imageBottom2.childImageSharp.fluid.src
                      : imageBottom2}></img>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  content: PropTypes.string,
  content2: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageBottom1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageBottom2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        title2={post.frontmatter.title2}
        content={post.html}
        content2={post.frontmatter.body2}
        image={post.frontmatter.image}
        image2={post.frontmatter.image2}
        imageBottom1={post.frontmatter.imageBottom1}
        imageBottom2={post.frontmatter.imageBottom2}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        title2
        body2
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageBottom1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageBottom2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
