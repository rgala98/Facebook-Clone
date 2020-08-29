import React from "react";

import "./Story.css";
import { Avatar } from "@material-ui/core";

const Story = ({ image, profileSrc, name }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar src={profileSrc}  className="story__avatar"/>
      <h4>{name}</h4>
    </div>
  );
};

export default Story;
