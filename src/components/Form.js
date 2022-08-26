import React from "react";

export default function Form() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Inicie seccion</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        ¡bienvenido de nuevo! Por favor, introduzca sus datos.
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Ingrese tu email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Ingrese tu password"
            type="password"
          />
        </div>
        <div className="mt-8">
          <button className="font-medium text-base text-violet-500">
            Recuperar contraseña
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
            Iniciar seccion
          </button>
        </div>
      </div>
    </div>
  );
}
