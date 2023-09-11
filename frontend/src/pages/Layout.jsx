
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <p>Here NavBar</p>
      <Outlet />
      <p>Here Footer</p>
    </main>
  );
};

export default Layout;
