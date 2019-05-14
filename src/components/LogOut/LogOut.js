import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class LogOut extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  componentWillMount() {
    // this.props.dispatch(authActionCreators.logout());
    localStorage.setItem("device_id", null);
    localStorage.setItem("user_id", null);
    localStorage.setItem("event_id", null);
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }

}

export default LogOut;