import React from "react";
import DjangoCSRFToken from "django-react-csrftoken";
import $ from "jquery";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error_username: 0,
      error_email: 0,
      error_password1: 0,
      error_password2: 0,
      correct: "#8d9ab0",
      wrong: "#eb4d4b",
      label: "#3f4a5c"
    };
    this.submitForm = this.submitForm.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validatePassword1 = this.validatePassword1.bind(this);
    this.validatePassword2 = this.validatePassword2.bind(this);
  }
  validateUsername() {
    let username = document.getElementById("username-value").value;
    let form_error_message = document.getElementById("form-error-message");
    if (username.length > 150) {
      document.getElementById(
        "username-value"
      ).style.borderColor = this.state.wrong;
      let username_label = document.getElementById("username-label");
      username_label.style.fontSize = "0.7em";
      username_label.style.top = "-1em";
      username_label.style.left = "2.4em";
      form_error_message.innerHTML =
        "The username can't be more than 150 characters.";
      form_error_message.style.opacity = 1;
      username_label.style.color = this.state.wrong;
      this.setState({ error_username: 1 });
    } else if (username.length == "") {
      document.getElementById(
        "username-value"
      ).style.borderColor = this.state.wrong;
      form_error_message.innerHTML = "The username can't be empty.";
      form_error_message.style.opacity = 1;
      let username_label = document.getElementById("username-label");
      username_label.style.color = this.state.wrong;
      this.setState({ error_username: 1 });
    } else {
      document.getElementById(
        "username-value"
      ).style.borderColor = this.state.correct;
      document.getElementById("username-label").style.color = this.state.label;
      form_error_message.style.opacity = 0;
      this.setState({ error_username: 0 });
    }
  }
  validateEmail() {
    let email = document.getElementById("email-value").value;
    let form_error_message = document.getElementById("form-error-message");
    if (!email.includes("@")) {
      document.getElementById(
        "email-value"
      ).style.borderColor = this.state.wrong;
      let email_label = document.getElementById("email-label");
      if (email != "") {
        email_label.style.fontSize = "0.7em";
        email_label.style.top = "-1em";
        email_label.style.left = "2.4em";
      }
      form_error_message.innerHTML =
        "The email address should include @ symbol.";
      form_error_message.style.opacity = 1;
      email_label.style.color = this.state.wrong;
      this.setState({ error_email: 1 });
    } else {
      document.getElementById(
        "email-value"
      ).style.borderColor = this.state.correct;
      document.getElementById("email-label").style.color = this.state.label;
      form_error_message.style.opacity = 0;
      this.setState({ error_email: 0 });
    }
  }
  validatePassword1() {
    let password1 = document.getElementById("password1-value").value;
    let form_error_message = document.getElementById("form-error-message");
    if (password1 == "") {
      document.getElementById(
        "password1-value"
      ).style.borderColor = this.state.wrong;
      form_error_message.innerHTML = "The password can't be empty.";
      form_error_message.style.opacity = 1;
      let password1_label = document.getElementById("password1-label");
      password1_label.style.color = this.state.wrong;
      this.setState({ error_password1: 1 });
    } else if (password1.length < 6) {
      let password1_label = document.getElementById("password1-label");
      password1_label.style.fontSize = "0.7em";
      password1_label.style.top = "-1em";
      password1_label.style.left = "2.4em";
      document.getElementById(
        "password1-value"
      ).style.borderColor = this.state.wrong;
      form_error_message.innerHTML =
        "The password has to be atleast 6 characters.";
      form_error_message.style.opacity = 1;
      password1_label.style.color = this.state.wrong;
      this.setState({ error_password1: 1 });
    } else {
      document.getElementById(
        "password1-value"
      ).style.borderColor = this.state.correct;
      document.getElementById("password1-label").style.color = this.state.label;
      form_error_message.style.opacity = 0;
      this.setState({ error_password1: 0 });
    }
  }
  validatePassword2() {
    let password1 = document.getElementById("password1-value").value;
    let password2 = document.getElementById("password2-value").value;
    let form_error_message = document.getElementById("form-error-message");
    if (password2 != password1) {
      document.getElementById(
        "password2-value"
      ).style.borderColor = this.state.wrong;
      form_error_message.innerHTML =
        "This password is not same as the original password.";
      form_error_message.style.opacity = 1;
      let password2_label = document.getElementById("password2-label");
      password2_label.style.color = this.state.wrong;
      password2_label.style.fontSize = "0.7em";
      password2_label.style.top = "-1em";
      password2_label.style.left = "2.4em";
      this.setState({ error_password2: 1 });
    } else {
      document.getElementById(
        "password2-value"
      ).style.borderColor = this.state.correct;
      document.getElementById("password2-label").style.color = this.state.label;
      form_error_message.style.opacity = 0;
      this.setState({ error_password2: 0 });
    }
  }
  submitForm(e) {
    e.preventDefault();
    let username = document.getElementById("username-value").value;
    let email = document.getElementById("email-value").value;
    let password1 = document.getElementById("password1-value").value;
    let password2 = document.getElementById("password2-value").value;
    let csrfmiddlewaretoken = document.getElementsByName(
      "csrfmiddlewaretoken"
    )[0].value;
    if (
      this.state.error_username == 0 &&
      this.state.error_email == 0 &&
      this.state.error_password1 == 0 &&
      this.state.error_password2 == 0
    ) {
      $.ajax({
        method: "POST",
        url: "/accounts/signup/",
        data: {
          csrfmiddlewaretoken: csrfmiddlewaretoken,
          username: username,
          email: email,
          password1: password1,
          password2: password2
        },
        success: function(result) {
          console.log(result);
          if (result.location == "/") {
            console.log("success");
            let right = document.getElementsByClassName("right")[0];
            let left = document.getElementsByClassName("left")[0];
            let leftContent = document.getElementsByClassName(
              "left-content"
            )[0];
            let success = document.getElementsByClassName("success")[0];
            let rightImg = document.getElementsByClassName("graphic")[0];
            let logo = document.getElementsByClassName("logo")[0];
            setTimeout(function() {});
            rightImg.style.opacity = "0";
            leftContent.style.opacity = "0";
            setTimeout(function() {
              rightImg.style.display = "none";
              right.style.width = "0";
              left.style.width = "100%";
              setTimeout(function() {
                leftContent.style.display = "none";
                success.style.display = "inline-block";
                setTimeout(function() {
                  success.style.opacity = "1";
                }, 500);
              }, 400);
            }, 400);
          } else {
            console.log("Internet Error");
          }
        }
      });
    } else {
      console.log("Error");
    }
  }
  render() {
    return (
      <div className="container">
        <center>
          <div className="card">
            <div className="left">
              <div className="left-content">
                <div className="logo">
                  <img src="static/img/logo_without_bg.png" />
                </div>
                <div className="form">
                  <h1>
                    Create your <br /> account now.
                  </h1>
                  <form method="post" onSubmit={this.submitForm}>
                    <div className="input-component">
                      <input
                        onBlur={this.validateUsername}
                        type="text"
                        id="username-value"
                        pattern=".{1,150}"
                        name="username"
                        required
                      />
                      <span className="line" />
                      <label id="username-label">Username</label>
                    </div>
                    <div className="input-component">
                      <input
                        onBlur={this.validateEmail}
                        type="email"
                        id="email-value"
                        name="email"
                        required
                      />
                      <span className="line" />
                      <label id="email-label">Email</label>
                    </div>
                    <div className="input-component">
                      <input
                        onBlur={this.validatePassword1}
                        type="password"
                        id="password1-value"
                        pattern=".{6,}"
                        name="password1"
                        required
                      />
                      <span className="line" id="line-password1" />
                      <label id="password1-label">Password</label>
                    </div>
                    <div className="input-component" id="last">
                      <input
                        onBlur={this.validatePassword2}
                        type="password"
                        id="password2-value"
                        pattern=".{6,}"
                        name="password2"
                        required
                      />
                      <span className="line" id="line-password2" />
                      <label id="password2-label">Confirm Password</label>
                    </div>
                    <DjangoCSRFToken />
                    <span id="form-error-message" />
                    <br />
                    <input type="submit" name="submit" />
                  </form>
                </div>
                <br />
                <a className="login-link" href="/accounts/login/">
                  Already have an account?
                </a>
              </div>
              <div className="success">
                <img src="static/img/smile.png" />
                <h1>Success!</h1>
                <p>
                  Open canvas to start creating <br />
                  beatuful neural nets.
                </p>
                <a href="/">Got it!</a>
              </div>
            </div>
            <div className="right">
              <img className="graphic" src="static/img/graphic_signup.png" />
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Signup;
