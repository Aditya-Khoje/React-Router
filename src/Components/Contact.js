import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

function Contact() {
  const style = {
    margin: "15px",
  };
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const goToAbout = () => {
    navigate("/about");
  };
  return (
    <>
      <section>
        <h1>Contact</h1>
      </section>
      <button style={style} onClick={goToHome}>
        Go To Home Page
      </button>
      <button style={style} onClick={goToAbout}>
        Go To Contact Page
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

export default Contact;
