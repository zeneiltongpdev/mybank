import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route index element={<h1> Welcome </h1>} />
      <Route path='*' element={<h1> Not Found </h1>} />
      <Route path='about' element={<h1> About </h1>} />
    </Routes>
  );
}

export default App;
