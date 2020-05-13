import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PhotoBookTemplate from "./templates/insta-index";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/jedrazb/personal-photoblog-content/master/metadata.json"
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
      <Router>
        <PhotoBookTemplate photos={this.state.photos} />
      </Router>
    );
  }
}

export default App;
