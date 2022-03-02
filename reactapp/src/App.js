import "./App.css";
import axios from "axios";
import Users from "./components/users";
import { useEffect, useState } from "react";

const APU_URL =
  "http://localhost:3001/api/v1/users?access_token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.oT7kSePnYs7eVIsRIzIi0UEC7XBclsrO3qrnXwic8Zg";

function getAPIData() {
  console.log(axios.get(APU_URL));
  return axios.get(APU_URL).then((response) => response.data);
}

// npm run start
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let mounted = true;
    
    getAPIData().then((items) => {
      if (mounted) {
        setUsers(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1 className="text-red-600">React-App</h1>
      <Users users={users}></Users>
    </div>
  );
}

export default App;
