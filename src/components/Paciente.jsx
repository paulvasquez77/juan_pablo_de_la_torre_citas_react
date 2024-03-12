import React from 'react'

export const Paciente = () => {
  return (

      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">

        <p className="font-bold mb-3 text-grey-700 uppercase">Nombre: {""}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">Propietario: {""}
          <span className="font-normal normal-case">Jean</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">Email: {""}
          <span className="font-normal normal-case">correo@</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">Fecha alta: {""}
          <span className="font-normal normal-case">10 diciembre 2022</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">Sintomas: {""}
          <span className="font-normal normal-case">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestiae tenetur assumenda optio repudiandae sapiente velit mollitia dolorum quisquam! Incidunt eveniet commodi quas delectus natus temporibus optio modi nihil error!
          </span>
        </p>

      </div>

  )
}
