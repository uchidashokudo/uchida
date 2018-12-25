import React from 'react'
import Layout from '../components/Layout'
import image1 from '../../static/img/donburi.jpg'
import image2 from '../../static/img/fish.jpg'
import image3 from '../../static/img/dish.jpg'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div>
                <img className="homeImg" alt="uchida image 1" src={image1}/>
                <img className="homeImg" alt="uchida image 2" src={image2} />
                <img className="homeImg" alt="uchida image 3" src={image3} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}