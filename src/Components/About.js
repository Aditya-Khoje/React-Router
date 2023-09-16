import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

export default function About() {
  const style = {
    margin: "15px",
  };
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <section>
        <h1>About</h1>
      </section>
      <button style={style} onClick={goToHome}>
        Go To Home Page
      </button>
      <button style={style} onClick={goToContact}>
        Go To About Page
      </button>
      <button
        style={style}
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <Outlet />
    </>
  );
}
