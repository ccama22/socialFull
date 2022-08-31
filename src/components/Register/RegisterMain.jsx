import React from "react";
import { Outlet } from "react-router-dom";

import socialFinal from "../../assets/img/socialFinal.png";
import Register from "./Register";

const RegisterMain = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Register />
      </div>
      <div
        className="hidden relative lg:flex flex-col h-full w-1/2 items-center justify-center"
        style={{ backgroundColor: "#e2f4ff" }}
      >
        <img src={socialFinal} alt="MDN" />
        <p style={{ fontSize: "50px", fontWeight: "bold", marginTop: "20px" }}>
          Social App
        </p>
      </div>
    </div>
  );
};

export default RegisterMain;
