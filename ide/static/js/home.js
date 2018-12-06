import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_id: "1",
      feature: "model_zoo",
      feature_title: "Load Model From Zoo",
      feature_description:
        "You can choose a model from a variety of models located in the model zoo belonging to different categories such as Recognition, Detection, Retrieval, Seq2Seq, Captioning and Segmentation."
    };
    this.scrollToAbout = this.scrollToAbout.bind(this);
    this.scrollToFeatures = this.scrollToFeatures.bind(this);
    this.scrollToTeam = this.scrollToTeam.bind(this);
    this.showFirstRow = this.showFirstRow.bind(this);
    this.showSecondRow = this.showSecondRow.bind(this);
    this.showThirdRow = this.showThirdRow.bind(this);
    this.loadModelFromZoo = this.loadModelFromZoo.bind(this);
    this.loadModelFromInput = this.loadModelFromInput.bind(this);
    this.buildModel = this.buildModel.bind(this);
    this.exportModel = this.exportModel.bind(this);
    this.importModel = this.importModel.bind(this);
    this.shareModel = this.shareModel.bind(this);
    this.realTimeCollaboration = this.realTimeCollaboration.bind(this);
    this.startDemo = this.startDemo.bind(this);
    this.stopDemo = this.stopDemo.bind(this);
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
  showFirstRow() {
    let slider = document.getElementsByClassName("slider")[0];
    slider.style.left = "0";
    let dot1 = document.getElementsByClassName("dot1")[0];
    let dot2 = document.getElementsByClassName("dot2")[0];
    let dot3 = document.getElementsByClassName("dot3")[0];
    dot1.className = "dot1 active";
    dot2.className = "dot2";
    dot3.className = "dot3";
  }
  showSecondRow() {
    let slider = document.getElementsByClassName("slider")[0];
    slider.style.left = "-100%";
    let dot1 = document.getElementsByClassName("dot1")[0];
    let dot2 = document.getElementsByClassName("dot2")[0];
    let dot3 = document.getElementsByClassName("dot3")[0];
    dot1.className = "dot1";
    dot2.className = "dot2 active";
    dot3.className = "dot3";
  }
  showThirdRow() {
    let slider = document.getElementsByClassName("slider")[0];
    slider.style.left = "-200%";
    let dot1 = document.getElementsByClassName("dot1")[0];
    let dot2 = document.getElementsByClassName("dot2")[0];
    let dot3 = document.getElementsByClassName("dot3")[0];
    dot1.className = "dot1";
    dot2.className = "dot2";
    dot3.className = "dot3 active";
  }

  loadModelFromZoo() {
    document.getElementsByClassName("demo-left")[0].style.width = "39.3%";
    document.getElementsByClassName("demo-right")[0].style.width = "30%";
    this.setState({
      feature_id: "1",
      feature: "model_zoo",
      feature_title: "Load Model From Zoo",
      feature_description:
        "You can choose a model from a variety of models located in the model zoo belonging to different categories such as Recognition, Detection, Retrieval, Seq2Seq, Captioning and Segmentation."
    });
    let line_model_zoo = document.getElementById("line_model_zoo");
    let line_model_input = document.getElementById("line_model_input");
    let line_build_model = document.getElementById("line_build_model");
    let line_export_model = document.getElementById("line_export_model");
    let line_import_model = document.getElementById("line_import_model");
    let line_share_model = document.getElementById("line_share_model");
    let line_real_time_collaboration = document.getElementById(
      "line_real_time_collaboration"
    );
    line_model_zoo.className = "line line-active";
    line_model_input.className = "line";
    line_build_model.className = "line";
    line_export_model.className = "line";
    line_import_model.className = "line";
    line_share_model.className = "line";
    line_real_time_collaboration.className = "line";
  }

  loadModelFromInput() {
    document.getElementsByClassName("demo-left")[0].style.width = "30%";
    document.getElementsByClassName("demo-right")[0].style.width = "39.3%";
    this.setState({
      feature_id: "2",
      feature: "model_input",
      feature_title: "Load Model From Input",
      feature_description:
        "You can load a model through a text input for any of the three frameworks. You will have to enter prototxt for Caffe, JSON for Keras and pbtxt for Tensorflow."
    });
    let line_model_zoo = document.getElementById("line_model_zoo");
    let line_model_input = document.getElementById("line_model_input");
    let line_build_model = document.getElementById("line_build_model");
    let line_export_model = document.getElementById("line_export_model");
    let line_import_model = document.getElementById("line_import_model");
    let line_share_model = document.getElementById("line_share_model");
    let line_real_time_collaboration = document.getElementById(
      "line_real_time_collaboration"
    );
    line_model_zoo.className = "line";
    line_model_input.className = "line line-active";
    line_build_model.className = "line";
    line_export_model.className = "line";
    line_import_model.className = "line";
    line_share_model.className = "line";
    line_real_time_collaboration.className = "line";
  }

  buildModel() {
    document.getElementsByClassName("demo-left")[0].style.width = "39.3%";
    document.getElementsByClassName("demo-right")[0].style.width = "30%";
    this.setState({
      feature_id: "3",
      feature: "build_model",
      feature_title: "Build Model From Components",
      feature_description:
        "There are a lot of components, called layers, provided which you can use to create neural nets."
    });
    let line_model_zoo = document.getElementById("line_model_zoo");
    let line_model_input = document.getElementById("line_model_input");
    let line_build_model = document.getElementById("line_build_model");
    let line_export_model = document.getElementById("line_export_model");
    let line_import_model = document.getElementById("line_import_model");
    let line_share_model = document.getElementById("line_share_model");
    let line_real_time_collaboration = document.getElementById(
      "line_real_time_collaboration"
    );
    line_model_zoo.className = "line";
    line_model_input.className = "line";
    line_build_model.className = "line line-active";
    line_export_model.className = "line";
    line_import_model.className = "line";
    line_share_model.className = "line";
    line_real_time_collaboration.className = "line";
  }

  exportModel() {
    document.getElementsByClassName("demo-left")[0].style.width = "30%";
    document.getElementsByClassName("demo-right")[0].style.width = "39.3%";
    this.setState({
      feature_id: "4",
      feature: "export_model",
      feature_title: "Export Model",
      feature_description:
        "You can export your model in any of the 3 frameworks."
    });
    let line_model_zoo = document.getElementById("line_model_zoo");
    let line_model_input = document.getElementById("line_model_input");
    let line_build_model = document.getElementById("line_build_model");
    let line_export_model = document.getElementById("line_export_model");
    let line_import_model = document.getElementById("line_import_model");
    let line_share_model = document.getElementById("line_share_model");
    let line_real_time_collaboration = document.getElementById(
      "line_real_time_collaboration"
    );
    line_model_zoo.className = "line";
    line_model_input.className = "line";
    line_build_model.className = "line";
    line_export_model.className = "line line-active";
    line_import_model.className = "line";
    line_share_model.className = "line";
    line_real_time_collaboration.className = "line";
  }

  importModel() {
    document.getElementsByClassName("demo-left")[0].style.width = "39.3%";
    document.getElementsByClassName("demo-right")[0].style.width = "30%";
    this.setState({
      feature_id: "5",
      feature: "import_model",
      feature_title: "Import Model",
      feature_description:
        "You can import model files from your local system and load them in the canvas."
    });
    let line_model_zoo = document.getElementById("line_model_zoo");
    let line_model_input = document.getElementById("line_model_input");
    let line_build_model = document.getElementById("line_build_model");
    let line_export_model = document.getElementById("line_export_model");
    let line_import_model = document.getElementById("line_import_model");
    let line_share_model = document.getElementById("line_share_model");
    let line_real_time_collaboration = document.getElementById(
      "line_real_time_collaboration"
    );
    line_model_zoo.className = "line";
    line_model_input.className = "line";
    line_build_model.className = "line";
    line_export_model.className = "line";
    line_import_model.className = "line line-active";
    line_share_model.className = "line";
    line_real_time_collaboration.className = "line";
  }

  shareModel() {
    document.getElementsByClassName("demo-left")[0].style.width = "30%";
    document.getElementsByClassName("demo-right")[0].style.width = "39.3%";
    this.setState({
      feature_id: "6",
      feature: "share_model",
      feature_title: "Share Model",
      feature_description:
        "You can generate a shareable link for your model which allows you to collaborate with anyone easily."
    });
    let line_model_zoo = document.getElementById("line_model_zoo");
    let line_model_input = document.getElementById("line_model_input");
    let line_build_model = document.getElementById("line_build_model");
    let line_export_model = document.getElementById("line_export_model");
    let line_import_model = document.getElementById("line_import_model");
    let line_share_model = document.getElementById("line_share_model");
    let line_real_time_collaboration = document.getElementById(
      "line_real_time_collaboration"
    );
    line_model_zoo.className = "line";
    line_model_input.className = "line";
    line_build_model.className = "line";
    line_export_model.className = "line";
    line_import_model.className = "line";
    line_share_model.className = "line line-active";
    line_real_time_collaboration.className = "line";
  }

  realTimeCollaboration() {
    document.getElementsByClassName("demo-left")[0].style.width = "39.3%";
    document.getElementsByClassName("demo-right")[0].style.width = "30%";
    this.setState({
      feature_id: "7",
      feature: "real_time_collaboration",
      feature_title: "Real Time Collaboration",
      feature_description:
        "You can collaborate with someone else and edit your model in realtime."
    });
    let line_model_zoo = document.getElementById("line_model_zoo");
    let line_model_input = document.getElementById("line_model_input");
    let line_build_model = document.getElementById("line_build_model");
    let line_export_model = document.getElementById("line_export_model");
    let line_import_model = document.getElementById("line_import_model");
    let line_share_model = document.getElementById("line_share_model");
    let line_real_time_collaboration = document.getElementById(
      "line_real_time_collaboration"
    );
    line_model_zoo.className = "line";
    line_model_input.className = "line";
    line_build_model.className = "line";
    line_export_model.className = "line";
    line_import_model.className = "line";
    line_share_model.className = "line";
    line_real_time_collaboration.className = "line line-active";
  }

  startDemo() {
    document.getElementsByClassName("overlay")[0].style.opacity = 0;
    let demo_gif = document.getElementsByClassName("demo-gif")[0];
    if (this.state.feature == "model_zoo") {
      demo_gif.src = "static/img/features/load_model_from_zoo.gif";
    } else if (this.state.feature == "model_input") {
      demo_gif.src = "static/img/features/load_model_from_input.gif";
    } else if (this.state.feature == "build_model") {
      demo_gif.src = "static/img/features/build_model.gif";
    } else if (this.state.feature == "export_model") {
      demo_gif.src = "static/img/features/export_model.gif";
    } else if (this.state.feature == "import_model") {
      demo_gif.src = "static/img/features/import_model.gif";
    } else if (this.state.feature == "share_model") {
      demo_gif.src = "static/img/features/share_model.gif";
    } else if (this.state.feature == "real_time_collaboration") {
      demo_gif.src = "static/img/features/real_time_collaboration.gif";
    }
  }

  stopDemo() {
    document.getElementsByClassName("overlay")[0].style.opacity = 1;
    let demo_gif = document.getElementsByClassName("demo-gif")[0];
    if (this.state.feature == "model_zoo") {
      demo_gif.src = "static/img/features/load_from_zoo_thumb.png";
    } else if (this.state.feature == "model_input") {
      demo_gif.src = "static/img/features/load_model_from_input_thumb.png";
    } else if (this.state.feature == "build_model") {
      demo_gif.src = "static/img/features/build_model_thumb.png";
    } else if (this.state.feature == "export_model") {
      demo_gif.src = "static/img/features/export_model_thumb.png";
    } else if (this.state.feature == "import_model") {
      demo_gif.src = "static/img/features/import_model_thumb.png";
    } else if (this.state.feature == "share_model") {
      demo_gif.src = "static/img/features/share_model_thumb.png";
    } else if (this.state.feature == "real_time_collaboration") {
      demo_gif.src = "static/img/features/real_time_collaboration_thumb.png";
    }
  }

  render() {
    let demo_feature_path = "default.png";
    if (this.state.feature == "model_zoo") {
      demo_feature_path = "load_from_zoo_thumb.png";
    } else if (this.state.feature == "model_input") {
      demo_feature_path = "load_model_from_input_thumb.png";
    } else if (this.state.feature == "build_model") {
      demo_feature_path = "build_model_thumb.png";
    } else if (this.state.feature == "export_model") {
      demo_feature_path = "export_model_thumb.png";
    } else if (this.state.feature == "import_model") {
      demo_feature_path = "import_model_thumb.png";
    } else if (this.state.feature == "share_model") {
      demo_feature_path = "share_model_thumb.png";
    } else if (this.state.feature == "real_time_collaboration") {
      demo_feature_path = "real_time_collaboration_thumb.png";
    }
    let demo_content = null;
    if (this.state.feature_id % 2 == 0) {
      demo_content = (
        <div>
          <div className="demo-left">
            <h2>{this.state.feature_title}</h2>
            <p>{this.state.feature_description}</p>
          </div>
          <div className="demo-right">
            <div className="demo-box">
              <div className="demo-box-top">
                <div className="circle1" />
                <div className="circle2" />
                <div className="circle3" />
              </div>
              <div
                className="overlay"
                onMouseOver={this.startDemo}
                onMouseOut={this.stopDemo}
              >
                <span className="glyphicon glyphicon-play" aria-hidden="true" />
              </div>
              <img
                src={"static/img/features/" + demo_feature_path}
                className="demo-gif"
              />
            </div>
          </div>
        </div>
      );
    } else {
      demo_content = (
        <div>
          <div className="demo-left">
            <div className="demo-box">
              <div className="demo-box-top">
                <div className="circle1" />
                <div className="circle2" />
                <div className="circle3" />
              </div>
              <div
                className="overlay"
                onMouseOver={this.startDemo}
                onMouseOut={this.stopDemo}
              >
                <center>
                  <span
                    className="glyphicon glyphicon-play"
                    aria-hidden="true"
                  />
                </center>
              </div>
              <img
                src={"static/img/features/" + demo_feature_path}
                className="demo-gif"
              />
            </div>
          </div>
          <div className="demo-right">
            <h2>{this.state.feature_title}</h2>
            <p>{this.state.feature_description}</p>
          </div>
        </div>
      );
    }

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
              <div className="features">
                <div className="slider" id="slider">
                  <a onClick={() => this.loadModelFromZoo()}>
                    <div className="box">
                      <img src="static/img/folder.png" />
                      <p>Load Model From Zoo</p>
                      <div className="line line-active" id="line_model_zoo" />
                    </div>
                  </a>
                  <a onClick={() => this.loadModelFromInput()}>
                    <div className="box">
                      <img src="static/img/input.png" />
                      <p>Load Model From Input</p>
                      <div className="line" id="line_model_input" />
                    </div>
                  </a>
                  <a onClick={() => this.buildModel()}>
                    <div className="box">
                      <img src="static/img/build.png" />
                      <p>Build Model From Components</p>
                      <div className="line" id="line_build_model" />
                    </div>
                  </a>
                  <a onClick={() => this.exportModel()}>
                    <div className="box">
                      <img src="static/img/export.png" />
                      <p>Export Model</p>
                      <div className="line" id="line_export_model" />
                    </div>
                  </a>
                  <a onClick={() => this.importModel()}>
                    <div className="box">
                      <img src="static/img/import.png" />
                      <p>Import Model</p>
                      <div className="line" id="line_import_model" />
                    </div>
                  </a>
                  <a onClick={() => this.shareModel()}>
                    <div className="box">
                      <img src="static/img/share.png" />
                      <p>Share Model</p>
                      <div className="line" id="line_share_model" />
                    </div>
                  </a>
                  <a onClick={() => this.realTimeCollaboration()}>
                    <div className="box">
                      <img src="static/img/collab.png" />
                      <p>Real Time Collaboration</p>
                      <div className="line" id="line_real_time_collaboration" />
                    </div>
                  </a>
                </div>
                <div className="dots">
                  <a onClick={() => this.showFirstRow()}>
                    <div className="dot1 active" />
                  </a>
                  <a onClick={() => this.showSecondRow()}>
                    <div className="dot2" />
                  </a>
                  <a onClick={() => this.showThirdRow()}>
                    <div className="dot3" />
                  </a>
                </div>
              </div>
              <div className="demo">{demo_content}</div>
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
