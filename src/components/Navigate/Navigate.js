import React from "react";
import { Button } from "semantic-ui-react";
import "./Navigate.css";

const Navigate = ({ onClick, postId, disabled }) => {
  return (
    <div className="navigate">
      <Button
        color="teal"
        content="Previous"
        icon="left arrow"
        labelPosition="left"
        onClick={e => onClick("PREV")}
        disabled={disabled}
      />
      <div className="navigate-page-num">
        {postId}
      </div>
      <Button
        color="teal"
        content="Next"
        icon="right arrow"
        labelPosition="right"
        className="Navigate-right-button"
        onClick={e => onClick("NEXT")}
        disabled={disabled}
      />
    </div>
  );
};

export default Navigate;
