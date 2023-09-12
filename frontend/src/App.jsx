/* eslint-disable react/jsx-key */
import server from "../src/service/api";
import { useState, useEffect } from "react";
//import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  server
    .get("/list")
    .then((res) => {
      console.log(res.data);
      setUsers(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  useEffect(() => {
    server.get("/list").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
    // .catch((err) => {
    //   console.log(err);
    // });
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            Account Number: {user.accountNum} - Name: {user.holderName} -
            Balance: {user.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
