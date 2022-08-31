import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import advertencia from "../../assets/img/advertencia.png";
import { data } from "autoprefixer";

export default function Forms() {
  const [stateLogin, setStateLogin] = useState(false);
  const [authState, setauthState] = useState();
  const navigate = useNavigate();

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Inicie seccion</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        ¡bienvenido de nuevo! Por favor, introduzca sus datos.
      </p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};
          //validacion nombre
          if (!valores.email) {
            errores.email = "Por favor ingrese un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "Correo Incorrecto";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          // const newDataUser = {
          //   ...valores,
          // };
          // const dataList = { ...dataUserSeccion, newDataUser };
          // setDataUserSeccion(dataList);
          // localStorage.setItem("data_user_seccion", JSON.stringify(dataList));
          console.log("valore", valores.email);
          const dataUserRegister = JSON.parse(
            localStorage.getItem("data_users")
          );
          console.log("data storagew", dataUserRegister);
          let isAuthenticated = false;

          // for(let i=0;i<=dataUserRegister.length;i++){

          // }
          dataUserRegister.forEach((data) => {
            if (valores.email === data.email) {
              isAuthenticated = true;
              setauthState(true);
              localStorage.setItem(
                "isAuthenticated",
                JSON.stringify(isAuthenticated)
              );
              navigate("/admin");
              // <Navigate to="/admin" />;
              console.log("correo iguales");
            } else {
              setauthState(false);
              setStateLogin(true);
              setTimeout(() => setStateLogin(false), 1500);
            }
          });
          resetForm();
          console.log("Iniciar seccion");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium" htmlFor="email">
                  Email
                </label>
                <Field
                  id="email"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Ingrese tu email"
                  name="email"
                />
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Ingrese tu password"
                  type="password"
                  name="password"
                />
              </div>
              <div className="mt-8">
                <Link to="/register">
                  <button className="font-medium text-base text-violet-500">
                    Register
                  </button>
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
                  type="submit"
                >
                  Iniciar seccion
                </button>
              </div>
              {authState === false && stateLogin && (
                <div className="btn-startSeccion">
                  <p>Error al iniciar seccion</p>
                  <img src={advertencia} width="30px" />
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
