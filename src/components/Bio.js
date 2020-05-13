import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Jedrzej Blaszyk`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: "50%",
          }}
        />
        <p style={{ maxWidth: 360 }}>
          Photo blog by{" "}
          <a href="https://mobile.twitter.com/jedr_blaszyk">Jedrzej Blaszyk</a>.{" "}
          Capturing my life through pictures. Check out my{" "}
          <a href="https://j.blaszyk.me">blog</a>.
        </p>
      </div>
    );
  }
}

export default Bio;
