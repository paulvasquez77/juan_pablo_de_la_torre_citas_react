import { useState } from "react";

export const Formulario = () => {

  const [nombre, setNombre] = useState("");

  const hangleSubmit = (e) =>{
    e.preventDefault();

    console.log("enviando formulario");
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form
        onSubmit={hangleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-6">

          <label 
            htmlFor="mascota" 
            className="block text-grey-700 uppercase font-bold">
            Nombre Mascota
          </label>

          <input type="text"
          id="mascota"
          placeholder="Nombre de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
          value={nombre}
          onChange={ (e) => {setNombre(e.target.value)} }
          />
        </div>

        <div className="mb-6">
          <label 
            htmlFor="propietario" 
            className="block text-grey-700 uppercase font-bold">
            Nombre propietario
          </label>

          <input type="text"
          id="propietario"
          placeholder="Nombre del propietario"
          className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label 
            htmlFor="email" 
            className="block text-grey-700 uppercase font-bold">
            email
          </label>

          <input type="email"
          id="email"
          placeholder="email contacto propietario"
          className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label 
            htmlFor="alta" 
            className="block text-grey-700 uppercase font-bold">
            alta
          </label>

          <input type="date"
          id="alta"
          className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label 
            htmlFor="sintomas" 
            className="block text-grey-700 uppercase font-bold">
            sintomas
          </label>

          <textarea name="" id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            placeholder="describe los sintomas"
          />

        </div>

        <input type="submit" value="agregar paciente" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"/>
      </form>
    </div>
  )
}
