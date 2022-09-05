import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import logoSocial from "../../assets/img/logoSocial.png";
import { Field, Form } from "formik";
import { TextField, Input } from "@material-ui/core";
const UserProfile = () => {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    getDataUser();
  }, []);
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
    setDataUser(dataUsers[0]);
    console.log("paussans", dataUsers);
  }

  return (
    <div className="container-dat">
      <div className="container-dataProfile">
        <div className="continer-dataFinal">
          <div className="container-photo">
            <p>Foto de Perfil</p>
            <img src={logoSocial} width="120px" />
          </div>
          <div className="container-data">
            <div className="container-password">
              {/* <label htmlFor="password">Password</label> */}
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={dataUser.name}
                style={{ width: 300 }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={dataUser.email}
                style={{ width: 300 }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={dataUser.celPhone}
                style={{ width: 300 }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={dataUser.password}
                style={{ width: 300 }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={dataUser.age}
                style={{ width: 300 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
