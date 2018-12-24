import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MenuCategories from '../components/MenuCategories'

export const MenuPageTemplate = ({
  image,
  title,
  menu,
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  marginBottom: '1rem',
                  backgroundImage: `url(${
                    !!image.childImageSharp
                      ? image.childImageSharp.fluid.src
                      : image
                    })`,
                }}
              >
                <h2 className="menu has-text-weight-bold is-size-1" >
                  {title}
                </h2>
              </div>
                <p className="center"
                  style={{
                    fontSize: "1.5rem",
                    margin: '2.8rem 0 3.4rem 0',
                  }}
                >{menu.description}</p>
                <MenuCategories categories={menu.menu_category} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

MenuPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  menu: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    menuCategory: PropTypes.array,
  }),
}

const MenuPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MenuPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        menu={frontmatter.menu}
      />
    </Layout>
  )
}

MenuPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MenuPage

export const menuPageQuery = graphql`
  query MenuPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        menu {
          heading
          description
          menu_category {
            heading
            description
            items {
              name
              description
              price
            }
          }
        }
      }
    }
  }
`
