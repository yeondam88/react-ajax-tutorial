import React, { Component } from "react";
import "./Warning.css";

class Warning extends Component {
  state = {
    closing: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.visible && !nextProps.visible) {
      this.setState({
        closing: true
      });

      setTimeout(() => {
        this.setState({
          closing: false
        });
      }, 1000);
    }
  }

  render() {
    const { message, visible } = this.props;
    const { closing } = this.state;

    if (!visible && !closing) return null;
    return (
      <div className="warning-wrapper">
        <div
          className={`warning ${closing ? "bounceOut" : "bounceIn"} animated`}
        >
          {message}
        </div>
      </div>
    );
  }
}

export default Warning;
