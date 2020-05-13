import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { formatPostDate } from "../utils/helpers";
import "./Photo.css";

class Photo extends React.Component {
  render() {
    const { date, location, caption, imgUrl } = this.props.photo;
    return (
      <div className="photo-container" style={{ marginBottom: "25px" }}>
        <div className="photo">
          <small>
            {formatPostDate(date, "en")}
            {` • `}
            {location}
          </small>
          <LazyLoadImage
            style={{
              marginBottom: 0,
            }}
            threshold={100}
            src={imgUrl} // use normal <img> attributes as props
          />
          <p className="caption">
            <d style={{ fontWeight: "bold" }}>jedr_blaszyk</d>
            {"  "}
            {caption}
          </p>
        </div>
      </div>
    );
  }
}

export default Photo;
