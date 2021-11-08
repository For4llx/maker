import React from "react";
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errorField: "",
      errorMessage: "",
    };
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail(onChange) {
    this.setState({
      email: onChange.target.value,
    });
    if (!regexEmail.test(onChange.target.value)) {
      this.setState({
        errorField: "form--error",
        errorMessage: "form__error--display",
      });
    }
  }

  render() {
    return (
      <form className="footer__form">
        <div className="form__container">
          <input
            type="text"
            className={`footer__email ${this.state.errorField}`}
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <div className={`form__error ${this.state.errorMessage}`}>
            Oops! That doesn’t look like an email address
          </div>
        </div>
        <button className="footer__button">Get notified</button>
      </form>
    );
  }
}

export default Email;
