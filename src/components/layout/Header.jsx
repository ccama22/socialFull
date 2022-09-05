import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logoSocial from "../../assets/img/logoSocial.png";
const Header = () => {
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    localStorage.setItem("isAuthenticated", JSON.stringify(false));
    localStorage.setItem("data_user_seccion", JSON.stringify({}));
  };

  useEffect(() => {
    getDataUser();
  }, [dataUser]);
  function getDataUser() {
    const dataUserSeccion = JSON.parse(
      localStorage.getItem("data_user_seccion")
    );
    const dataUserInfo = JSON.parse(localStorage.getItem("data_users"));
    // setDataUser(dataUserSeccion.newDataUser.email);
    const dataUsers = dataUserInfo.filter((data) => {
      if (dataUserSeccion.newDataUser.email === data.email) {
        return data;
      }
    });
    setDataUser(dataUsers[0].email);
    console.log("paussans", dataUsers);
  }
  return (
    <>
      <header className="container-header">
        <div className="container-logoInfo">
          <div className="continer-logo">
            <img src={logoSocial} width="70px" />
          </div>
          <div className="continer-content">
            <p>Socil Feed</p>
          </div>
        </div>
        <div className="container-profile">
          <span className="name">{dataUser}</span>
          <img src="https://secure.gravatar.com/avatar/fcc672a7f02fbf6ad569d4c5dc5aedc1?s=120&d=identicon&r=g" />
        </div>
        <div className="container-viewProfile">
          <NavLink to="">
            <p>Pagina Principal</p>
          </NavLink>
        </div>
        <div className="continer-minPerfil">
          <NavLink to="profile">
            <p>Ver Perfil</p>
          </NavLink>
        </div>
        <div className="continer-minPerfil">
          <button onClick={handleClick}>
            <p>Serran seccion</p>
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
