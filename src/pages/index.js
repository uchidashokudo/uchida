import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({}),
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        description,
      }
    }
  }
`
