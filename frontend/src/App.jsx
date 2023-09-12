import server from "../src/service/api";
import { useState, useEffect } from "react";
import { accountSchema } from "./schemas/accountSchema";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    holderName: "",
    holderEmail: "",
    balance: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

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

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      if (!form.holderName || !form.holderEmail || !form.balance) return;

      const response = await server.post("/register", {
        holderName: form.holderName,
        holderEmail: form.holderEmail,
        balance: form.balance,
      });

      const { accessToken, user } = response.data;
      setItem


      loadUsers();
      alert("Usuário cadastrado com sucesso!");
    } catch (e) {
      console.log(e);
    }
  }

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
      <h2>User Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="holderName">Name</label>
        <input
          type="text"
          name="holderName"
          id="holderName"
          onChange={handleForm}
        />
        <label htmlFor="holderEmail">Email</label>
        <input
          type="email"
          name="holderEmail"
          id="holderEmail"
          onChange={handleForm}
        />
        <label htmlFor="balance">Balance</label>
        <input
          type="number"
          name="balance"
          id="balance"
          onChange={handleForm}
        />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default App;
