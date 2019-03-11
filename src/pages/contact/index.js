import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-5  is-offset-1">
                  <div className="content">
                    <ul id="contact-info">
                      <li>
                        <h2>Address</h2>
                        633 Courtney St&nbsp;<br/>
                        Victoria, BC&nbsp;<br/>
                        V8W 1B9
                      </li>
                      <li>
                        <h2>Hours</h2>
                        Monday - Friday<br/>
                        11am - 2pm<br/>
                      </li>
                      <li>
                        Closed on weekends and statutory holidays.
                      </li>
                      <li>
                        <h2>Phone</h2>
                        <a href="tel:250-388-7383">250 388 7383</a>
                      </li>
                      <li>
                        <h2>Email</h2>
                        <a href="mailto:uchidavictoria@gmail.com">uchidavictoria@gmail.ca</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.736788244608!2d-123.36878348454215!3d48.423197339203824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f74906fda7ebd%3A0xbc506bda1401f2ab!2sUchida+Eatery!5e0!3m2!1sen!2sca!4v1545850922626"
                      width="100%"
                      height="450"
                      frameborder="0"
                      style={{
                        border: 0
                      }}
                      title="Uchida Map"
                      allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
