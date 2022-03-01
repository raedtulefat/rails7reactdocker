import "./App.css";
import axios from "axios";
import Comments from "./components/comments";
import { useEffect, useState } from "react";

const APU_URL =
  "http://localhost:3000/api/v1/comments?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.oT7kSePnYs7eVIsRIzIi0UEC7XBclsrO3qrnXwic8Zg";

function getAPIData() {
  return axios.get(APU_URL).then((response) => response.data);
}

// npm run start
function App() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setComments(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1 className="text-red-600">React-App</h1>
      <Comments comments={comments}></Comments>
    </div>
  );
}

export default App;
