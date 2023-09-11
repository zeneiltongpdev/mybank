import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<h1> Welcome </h1>} />
    </Routes>
  );
}

export default App;
