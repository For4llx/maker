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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(onChange) {
    this.setState({
      email: onChange.target.value,
    });
    if (!regexEmail.test(onChange.target.value)) {
      this.setState({
        errorField: "form__field--error",
        errorMessage: "form__error--display",
      });
    }
    if (
      onChange.target.value === "" ||
      regexEmail.test(onChange.target.value)
    ) {
      this.setState({
        errorField: "",
        errorMessage: "",
      });
    }
  }
  handleSubmit(onSubmit) {
    onSubmit.preventDefault();
    if (regexEmail.test(this.state.email)) {
      const data = JSON.stringify(this.state.email);
      console.log(data);
      this.setState({
        email: "",
      });
    }
  }

  render() {
    return (
      <form className="footer__form" onSubmit={this.handleSubmit}>
        <div className="form__container">
          <input
            type="text"
            className={`form__field footer__field  ${this.state.errorField}`}
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
