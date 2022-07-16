import axios from "axios";
import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  state = {
    images: [],
  };

  getImages = () => {
    axios
      .get("https://api.unplash.com/photos/random", {
        params: {
          client_id: "Access Key",
          count: 30,
        },
      })
      .then((res) => {
        this.setState({
          images: [
            ...this.state.images,
            ...res.data.map((image) => image.urls.small),
          ],
        });
      });
  };

  render() {
    return <div className="App">Let's start</div>;
  }
}

export default App;
