import server from "../src/service/api";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    try {
      const response = await server.get("/list");
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Back of Cubos</h1>
      <h2>Users List</h2>
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
