import React from 'react'
import Layout from '../components/Layout'
import image1 from '../../static/img/salmon_sm.jpg'
import image2 from '../../static/img/fish.jpg'
import image3 from '../../static/img/plants.jpg'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div>
                <img className="homeImg" alt="uchida 3" src={image3} />
                <img className="homeImg" alt="uchida 2" src={image2} />
                <img className="homeImg" alt="uchida 1" src={image1}/>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
