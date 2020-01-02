import React from "react";
import MyAccount from "./MyAccount.jsx";
import MatchContainer from './MatchContainer.jsx';
import LoginContainer from "./LogInContainer.jsx";
import ChatContainer from "./ChatContainer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageToRender: "login",
      userId: 0,
    };
    this.toMatch = this.toMatch.bind(this);
    this.toLogin = this.toLogin.bind(this);
    this.toMyAccount = this.toMyAccount.bind(this);
  }

  toMatch(id = this.state.userId) {
    this.setState({
      userId: id,
      pageToRender: "match",
    });
  }

  toLogin() {
    this.setState({
      pageToRender: "login",
    })
  }

  toMyAccount = () => {
    this.setState({
      pageToRender: "myAccount",
    });
  }

  toChat = () => {
    this.setState({
      pageToRender: "chat",
    });
  }

  render() {
    let displayed;
    if (this.state.pageToRender === "login") {
      displayed = (<LoginContainer toMatch={this.toMatch} toMyAccount={this.toMyAccount} />);
    }
    else if (this.state.pageToRender === "match") {
      displayed = (<MatchContainer userId={this.state.userId} toLogin={this.toLogin} toMyAccount={this.toMyAccount} toChat={this.toChat} />);
    }
    else if (this.state.pageToRender === "myAccount") {
      displayed = (<MyAccount userId={this.state.userId} toLogin={this.toLogin} toMatch={this.toMatch} />);
    }
    else if (this.state.pageToRender === "chat") {
      displayed = (<ChatContainer userId={this.state.userId} />);
    }
    return (
      <React.Fragment>
        {displayed}
      </React.Fragment>
    )
  }
}

export default App;
