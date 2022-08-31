import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Register = () => {
  const [stateForm, setStateForm] = useState(false);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    getDataUsers();
  }, []);
  function getDataUsers() {
    const dataUserFinal = JSON.parse(localStorage.getItem("data_users"));
    if (dataUserFinal !== null) {
      setDataUser(dataUserFinal);
    } else {
      console.log("ss");
    }
  }

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Registro</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        ¡bienvenido de nuevo! Por favor, introduzca sus datos.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validate={(valores) => {
          let errores = {};
          //validacion nombre
          if (!valores.name) {
            errores.name = "Por favor ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre solo puede contener letras y espacios";
          }
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
          console.log("data users", valores);
          const newDataUser = {
            ...valores,
          };
          const dataList = [...dataUser, newDataUser];
          setDataUser(dataList);
          localStorage.setItem("data_users", JSON.stringify(dataList));
          resetForm();
          console.log("Formulario enviado");
          setStateForm(true);
          setTimeout(() => setStateForm(false), 4000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium" htmlFor="name">
                  Nombre
                </label>
                <Field
                  id="name"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Ingresa tu nombre"
                  name="name"
                  // value={values.name}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
                {touched.name && errors.name && (
                  <div className="error">{errors.name}</div>
                )}
              </div>
              <div>
                <label className="text-lg font-medium" htmlFor="email">
                  Correo
                </label>
                <Field
                  id="email"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Ingresa tu correo"
                  name="email"
                  // value={values.email}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>
              <div className="mt-8">
                <Link to="/">
                  <button className="font-medium text-base text-violet-500">
                    Iniciar Seccion
                  </button>
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl text-white text-lg font-bold"
                  style={{ backgroundColor: "#ff2d2e" }}
                  type="submit"
                >
                  Registrar
                </button>
              </div>
            </div>
            {stateForm && (
              <div style={{ backgroundColor: "#e2f4ff", marginTop: "20px" }}>
                <p className="exito">Formulario enviado con exito!</p>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
