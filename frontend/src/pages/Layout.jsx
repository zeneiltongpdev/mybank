import { Outlet } from "react-router-dom";

const Layout = () => {
  
  return (
    <main>
      <p>Here NavBar</p>
      <Outlet />
      <p>Here Footer</p>
      <ul>
        <li></li>
      </ul>
    </main>
  );
};

export default Layout;
