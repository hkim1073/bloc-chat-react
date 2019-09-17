import React, { Component } from 'react';


class User extends Component {
  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  handleOnClick(e) {
    e.preventDefault();

    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  handleSignOut(e) {
    e.preventDefault();

    this.props.firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <h5>{this.props.user.displayName}</h5>
        <button onClick={(e) => this.handleOnClick(e)}>Sign In</button>
        <button onClick={(e) => this.handleSignOut(e)}>Sign Out</button>
      </div>
    )
  }
};

export default User;
