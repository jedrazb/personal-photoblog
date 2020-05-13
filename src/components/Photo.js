import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { rhythm } from "../utils/typography";
import { formatPostDate } from "../utils/helpers";

class Photo extends React.Component {
  render() {
    const { date, caption, imgUrl } = this.props.photo;
    return (
      <div>
        <LazyLoadImage
          alt={image.alt}
          threshold={100}
          src={image.src} // use normal <img> attributes as props
        />
        <span>{caption}</span>
        <span></span>
      </div>
    );
  }
}

export default Photo;
