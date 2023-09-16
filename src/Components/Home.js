import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <section>
        <h1>Home</h1>
      </section>
      <Outlet />
    </>
  );
}

export default Home;
