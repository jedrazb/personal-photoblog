import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PhotoBookTemplate from "./templates/insta-index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/jedrazb/personal-photoblog-content/master/metadata.json",
      { cache: "no-cache" }
    )
      .then((response) => response.json())
      .then((photos) => {
        this.setState({
          photos: photos,
        });
      });
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <PhotoBookTemplate photos={this.state.photos} />
      </Router>
    );
  }
}

export default App;
