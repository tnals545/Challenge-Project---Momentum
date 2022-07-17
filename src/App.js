import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Picture from "./components/picture";
import GetClock from "./components/clock";

function App() {
  const [imageUrl, setImageUrl] = useState([]);
  const getImage = () => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: "Access Key",
          count: 1,
        },
      })
      .then((res) => {
        setImageUrl(res.data[0].urls.full);
      });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="App">
      <Picture imageUrl={imageUrl} />
      <GetClock />
    </div>
  );
}

export default App;
