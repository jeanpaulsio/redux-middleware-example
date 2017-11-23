import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers = () => {
    console.log(this.props.users)
    if (!this.props.users) return <div />;

    return (
      <ul>
        {this.props.users.map(user => {
          return <li key={user.name}>{user.name}</li>;
        })}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h1>List of Users</h1>
        {this.renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, actions)(App);
