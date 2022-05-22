import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


export default function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
      </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}


class SignDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
        <Dialog title="다이얼로그 태그 첨 써봔누"
              message="뭐더고 심니?">
          <input value={this.state.login}
                onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            로긴 혀바~!
          </button>
        </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`환영해!! ${this.state.login}아ㅋㅋ`);
  }
}



ReactDOM.render(
  <SignDialog />,
  document.getElementById('root')
);