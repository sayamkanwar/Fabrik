import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demo_gif_1: "static/img/features/load_from_zoo_thumb.png",
      demo_gif_2: "static/img/features/load_model_from_input_thumb.png",
      demo_gif_3: "static/img/features/build_model_thumb.png",
      demo_gif_4: "static/img/features/export_model_thumb.png",
      demo_gif_5: "static/img/features/import_model_thumb.png",
      demo_gif_6: "static/img/features/share_model_thumb.png",
      demo_gif_7: "static/img/features/real_time_collaboration_thumb.png"
    };
    this.scrollToAbout = this.scrollToAbout.bind(this);
    this.scrollToFeatures = this.scrollToFeatures.bind(this);
    this.scrollToTeam = this.scrollToTeam.bind(this);
  }
  scrollToAbout() {
    this.refs.about.scrollIntoView({ behavior: "smooth" });
  }
  scrollToFeatures() {
    this.refs.features.scrollIntoView({ behavior: "smooth" });
  }
  scrollToTeam() {
    this.refs.team.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <div className="header">
            <img src="static/img/cloudcv.png" className="logo" />
            <div className="links">
              <a href="/accounts/signup/" id="signup">
                Sign up
              </a>
              <a onClick={() => this.scrollToTeam()}>Team</a>
              <a onClick={() => this.scrollToFeatures()}>Features</a>
              <a onClick={() => this.scrollToAbout()}>About</a>
            </div>
            <div className="clear" />
          </div>
          <div className="first">
            <div className="first-left">
              <h1>Fabrik</h1>
              <p>
                Collaboratively build, visualize <br /> and design neural nets
                in browser.
              </p>
              <br />
              <a href="/accounts/login/" className="try">
                Try it now!
              </a>
            </div>
            <div className="first-right">
              <img src="static/img/graphic1.png" />
            </div>
            <div className="clear" />
          </div>
          <div className="second" ref="about">
            <h1>About</h1>
            <center>
              <div className="large-box">
                <br />
                <p>
                  <b>Fabrik</b> is an online collaborative platform to build,
                  visualize and train deep learning models via a simple
                  drag-and-drop interface. It allows researchers to collectively
                  develop and debug models using a web GUI that supports
                  importing, editing and exporting networks to popular
                  frameworks like Caffe, Keras, and TensorFlow.
                </p>
              </div>
            </center>
          </div>
          <div className="third" ref="features">
            <br />
            <h1>Features</h1>
            <center>
              <div className="demo">
                <div className="demo-left">
                  <div className="demo-box">
                    <div className="demo-box-top">
                      <div className="circle1" />
                      <div className="circle2" />
                      <div className="circle3" />
                    </div>
                    <div
                      className="overlay"
                      onMouseOver={() =>
                        this.setState({
                          demo_gif_1:
                            "static/img/features/load_model_from_zoo.gif"
                        })
                      }
                      onMouseOut={() =>
                        this.setState({
                          demo_gif_1:
                            "static/img/features/load_from_zoo_thumb.png"
                        })
                      }
                    >
                      <center>
                        <span
                          className="glyphicon glyphicon-play"
                          aria-hidden="true"
                        />
                      </center>
                    </div>
                    <img src={this.state.demo_gif_1} className="demo-gif" />
                  </div>
                </div>
                <div className="demo-right">
                  <h2>Load Model From Zoo</h2>
                  <p>
                    You can choose a model from a variety of models located in
                    the model zoo belonging to different categories such as
                    Recognition, Detection, Retrieval, Seq2Seq, Captioning and
                    Segmentation.
                  </p>
                </div>
              </div>
              <div className="demo">
                <div className="demo-right">
                  <h2>Load Model From Input</h2>
                  <p>
                    You can load a model through a text input for any of the
                    three frameworks. You will have to enter prototxt for Caffe,
                    JSON for Keras and pbtxt for Tensorflow.
                  </p>
                </div>
                <div className="demo-left">
                  <div className="demo-box">
                    <div className="demo-box-top">
                      <div className="circle1" />
                      <div className="circle2" />
                      <div className="circle3" />
                    </div>
                    <div
                      className="overlay"
                      onMouseOver={() =>
                        this.setState({
                          demo_gif_2:
                            "static/img/features/load_model_from_input.gif"
                        })
                      }
                      onMouseOut={() =>
                        this.setState({
                          demo_gif_2:
                            "static/img/features/load_model_from_input_thumb.png"
                        })
                      }
                    >
                      <center>
                        <span
                          className="glyphicon glyphicon-play"
                          aria-hidden="true"
                        />
                      </center>
                    </div>
                    <img src={this.state.demo_gif_2} className="demo-gif" />
                  </div>
                </div>
              </div>
              <div className="demo">
                <div className="demo-left">
                  <div className="demo-box">
                    <div className="demo-box-top">
                      <div className="circle1" />
                      <div className="circle2" />
                      <div className="circle3" />
                    </div>
                    <div
                      className="overlay"
                      onMouseOver={() =>
                        this.setState({
                          demo_gif_3: "static/img/features/build_model.gif"
                        })
                      }
                      onMouseOut={() =>
                        this.setState({
                          demo_gif_3:
                            "static/img/features/build_model_thumb.png"
                        })
                      }
                    >
                      <center>
                        <span
                          className="glyphicon glyphicon-play"
                          aria-hidden="true"
                        />
                      </center>
                    </div>
                    <img src={this.state.demo_gif_3} className="demo-gif" />
                  </div>
                </div>
                <div className="demo-right">
                  <h2 style={{ wordSpacing: "-0.08em" }}>
                    Build Model From Components
                  </h2>
                  <p>
                    There are a lot of components, called layers, provided which
                    you can use to create neural nets.
                  </p>
                </div>
              </div>
              <div className="demo">
                <div className="demo-right">
                  <h2>Export Model</h2>
                  <p>You can export your model in any of the 3 frameworks.</p>
                </div>
                <div className="demo-left">
                  <div className="demo-box">
                    <div className="demo-box-top">
                      <div className="circle1" />
                      <div className="circle2" />
                      <div className="circle3" />
                    </div>
                    <div
                      className="overlay"
                      onMouseOver={() =>
                        this.setState({
                          demo_gif_4: "static/img/features/export_model.gif"
                        })
                      }
                      onMouseOut={() =>
                        this.setState({
                          demo_gif_4:
                            "static/img/features/export_model_thumb.png"
                        })
                      }
                    >
                      <center>
                        <span
                          className="glyphicon glyphicon-play"
                          aria-hidden="true"
                        />
                      </center>
                    </div>
                    <img src={this.state.demo_gif_4} className="demo-gif" />
                  </div>
                </div>
              </div>
              <div className="demo">
                <div className="demo-left">
                  <div className="demo-box">
                    <div className="demo-box-top">
                      <div className="circle1" />
                      <div className="circle2" />
                      <div className="circle3" />
                    </div>
                    <div
                      className="overlay"
                      onMouseOver={() =>
                        this.setState({
                          demo_gif_5: "static/img/features/import_model.gif"
                        })
                      }
                      onMouseOut={() =>
                        this.setState({
                          demo_gif_5:
                            "static/img/features/import_model_thumb.png"
                        })
                      }
                    >
                      <center>
                        <span
                          className="glyphicon glyphicon-play"
                          aria-hidden="true"
                        />
                      </center>
                    </div>
                    <img src={this.state.demo_gif_5} className="demo-gif" />
                  </div>
                </div>
                <div className="demo-right">
                  <h2>Import Model</h2>
                  <p>
                    You can import model files from your local system and load
                    them in the canvas.
                  </p>
                </div>
              </div>
              <div className="demo">
                <div className="demo-right">
                  <h2>Share Model</h2>
                  <p>
                    You can generate a shareable link for your model which
                    allows you to collaborate with anyone easily.
                  </p>
                </div>
                <div className="demo-left">
                  <div className="demo-box">
                    <div className="demo-box-top">
                      <div className="circle1" />
                      <div className="circle2" />
                      <div className="circle3" />
                    </div>
                    <div
                      className="overlay"
                      onMouseOver={() =>
                        this.setState({
                          demo_gif_6: "static/img/features/share_model.gif"
                        })
                      }
                      onMouseOut={() =>
                        this.setState({
                          demo_gif_6:
                            "static/img/features/share_model_thumb.png"
                        })
                      }
                    >
                      <center>
                        <span
                          className="glyphicon glyphicon-play"
                          aria-hidden="true"
                        />
                      </center>
                    </div>
                    <img src={this.state.demo_gif_6} className="demo-gif" />
                  </div>
                </div>
              </div>
              <div className="demo">
                <div className="demo-left">
                  <div className="demo-box">
                    <div className="demo-box-top">
                      <div className="circle1" />
                      <div className="circle2" />
                      <div className="circle3" />
                    </div>
                    <div
                      className="overlay"
                      onMouseOver={() =>
                        this.setState({
                          demo_gif_7:
                            "static/img/features/real_time_collaboration.gif"
                        })
                      }
                      onMouseOut={() =>
                        this.setState({
                          demo_gif_7:
                            "static/img/features/real_time_collaboration_thumb.png"
                        })
                      }
                    >
                      <center>
                        <span
                          className="glyphicon glyphicon-play"
                          aria-hidden="true"
                        />
                      </center>
                    </div>
                    <img src={this.state.demo_gif_7} className="demo-gif" />
                  </div>
                </div>
                <div className="demo-right">
                  <h2>Real Time Collaboration</h2>
                  <p>
                    You can collaborate with someone else and edit your model in
                    real time.
                  </p>
                </div>
              </div>
            </center>
            <br />
          </div>
          <div className="fourth" ref="team">
            <h1>Team</h1>
            <center>
              <div className="members">
                <br />
                <div className="member">
                  <img src="static/img/Deshraj.png" />
                  <p>Deshraj</p>
                  <p className="social-icons">
                    <a href="http://deshraj.xyz">
                      <span
                        className="glyphicon glyphicon-user"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="mailto:deshrajdry@gmail.com">
                      <span
                        className="glyphicon glyphicon-envelope"
                        aria-hidden="true"
                      />
                    </a>
                  </p>
                </div>
                <div className="member">
                  <img src="static/img/Ram_Ramrakhya.jpg" />
                  <p>Ram Ramrakhya</p>
                  <p className="social-icons">
                    <a href="http://github.com/Ram81">
                      <span
                        className="glyphicon glyphicon-user"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="mailto:ramramrakhya81@gmail.com">
                      <span
                        className="glyphicon glyphicon-envelope"
                        aria-hidden="true"
                      />
                    </a>
                  </p>
                </div>
                <div className="member">
                  <img src="static/img/user 2.png" />
                  <p>Utsav Garg</p>
                  <p className="social-icons">
                    <a href="#">
                      <span
                        className="glyphicon glyphicon-user"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="#">
                      <span
                        className="glyphicon glyphicon-envelope"
                        aria-hidden="true"
                      />
                    </a>
                  </p>
                </div>
                <div className="member">
                  <img src="static/img/Viraj_Prabhu.png" />
                  <p>Viraj Prabhu</p>
                  <p className="social-icons">
                    <a href="http://virajprabhu.github.io">
                      <span
                        className="glyphicon glyphicon-user"
                        aria-hidden="true"
                      />
                    </a>
                    <a href="mailto:virajp@gatech.edu">
                      <span
                        className="glyphicon glyphicon-envelope"
                        aria-hidden="true"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </center>
          </div>
          <div className="footer">
            <br />
            <center>
              <div className="footer-content">
                <div className="footer-content-left">
                  <p>Fabrik</p>
                  <p className="sub-txt">
                    Collaboratively build, visualize <br /> and design neural
                    nets in browser
                  </p>
                  <p className="sub-txt">
                    <span>©</span> CloudCV
                  </p>
                </div>
                <div className="footer-content-right">
                  <div className="icons">
                    <a href="https://github.com/Cloud-CV/Fabrik">
                      <img src="static/img/github.png" />
                    </a>
                    <a href="https://www.facebook.com/mlcloudcv">
                      <img src="static/img/facebook.png" />
                    </a>
                    <a href="https://www.linkedin.com/company/cloudcv">
                      <img src="static/img/linkedin.png" />
                    </a>
                    <a href="https://twitter.com/project_cloudcv">
                      <img src="static/img/twitter.png" />
                    </a>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
