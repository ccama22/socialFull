import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logoSocial from "../../assets/img/logoSocial.png";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
  };
  return (
    <>
      <header className="container-header">
        <div className="continer-logo">
          <img src={logoSocial} width="70px" />
        </div>
        <div className="continer-content">
          <p>Socil Feed</p>
        </div>
        <div className="continer-minPerfil">
          <button onClick={handleClick}>
            <a>Serran seccion</a>
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
