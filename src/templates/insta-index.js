import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Panel from "../components/Panel";
import Photo from "../components/Photo";
import React from "react";
import get from "lodash/get";
import { rhythm } from "../utils/typography";

class PhotoBookTemplate extends React.Component {
  render() {
    const siteTitle = "Jedrzej Blaszyk - PhotoBlog";
    const photos = this.props.photos;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <aside>
          <Bio />
        </aside>
        <main>
          {photos.map((photo) => (
            <Photo photo={photo} />
          ))}
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default PhotoBookTemplate;
