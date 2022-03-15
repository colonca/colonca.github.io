import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { trackPromise } from 'react-promise-tracker';
import validationOperadores from './Schema';
import OperadoresServices from '../../services/OperadoresServices';

function CreateOrUpdateOperador({ toogleModal, operador }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(operador);
    setData(operador);
  }, [operador]);

  return (
    <div className="">
      <h2 className="font-semibold">
        {operador && operador.id ? 'Actualizar' : 'Nuevo'} Operador
      </h2>
      <Formik
        initialValues={
          data || {
            nombres: '',
            apellidos: '',
            cedula: '',
            telefono1: '',
            telefono2: '',
            licencia: '',
            direccion: '',
            email: ''
          }
        }
        enableReinitialize
        validationSchema={validationOperadores}
        onSubmit={(values) => {
          if (values.id) {
            trackPromise(OperadoresServices.update(values)).then(() => {
              toogleModal(false);
            });
          } else {
            trackPromise(OperadoresServices.post(values)).then(() => {
              toogleModal(false);
            });
          }
        }}
      >
        {(formik) => (
          <form className="my-4" onSubmit={formik.handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-name"
                >
                  Nombres
                </label>
                <input
                  className={`input-box ${
                    formik.errors.nombres && formik.touched.nombres
                      ? 'border border-red-500'
                      : ''
                  }`}
                  id="grid-name"
                  type="text"
                  name="nombres"
                  value={formik.values.nombres}
                  placeholder="name"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Apellidos
                </label>
                <input
                  className={`input-box ${
                    formik.errors.apellidos && formik.touched.apellidos
                      ? 'border border-red-500'
                      : ''
                  }`}
                  id="grid-last-name"
                  type="text"
                  name="apellidos"
                  values={formik.values.apellidos}
                  placeholder="last name"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-id"
                >
                  Cédula
                </label>
                <input
                  className={`input-box ${
                    formik.errors.cedula && formik.touched.cedula
                      ? 'border border-red-500'
                      : ''
                  }`}
                  id="grid-id"
                  type="number"
                  name="cedula"
                  value={formik.values.cedula}
                  placeholder="id"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phone-1"
                >
                  Teléfono 1
                </label>
                <input
                  className={`input-box ${
                    formik.errors.telefono1 && formik.touched.telefono1
                      ? 'border border-red-500'
                      : ''
                  }`}
                  id="grid-phone-1"
                  type="number"
                  name="telefono1"
                  value={formik.values.telefono1}
                  placeholder="phone 1"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phone-2"
                >
                  Teléfono 2
                </label>
                <input
                  className={`input-box ${
                    formik.errors.telefono2 && formik.touched.telefono2
                      ? 'border border-red-500'
                      : ''
                  }`}
                  id="grid-phone-2"
                  type="tel"
                  name="telefono2"
                  value={formik.values.telefono2}
                  placeholder="phone 2"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-licence"
                >
                  Licencia
                </label>
                <input
                  className={`input-box ${
                    formik.errors.licencia && formik.touched.licencia
                      ? 'border border-red-500'
                      : ''
                  }`}
                  id="grid-licence"
                  type="file"
                  name="licencia"
                  placeholder=""
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-adress"
                >
                  Dirección
                </label>
                <input
                  className={`input-box ${
                    formik.errors.direccion && formik.touched.direccion
                      ? 'border border-red-500'
                      : ''
                  }`}
                  id="grid-adress"
                  type="text"
                  name="direccion"
                  value={formik.values.direccion}
                  placeholder="adress"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Correo Electrónico
                </label>
                <input
                  className={`input-box ${
                    formik.errors.email && formik.touched.email
                      ? 'border border-red-500'
                      : ''
                  }`}
                  id="grid-email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  placeholder="email"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button type="submit" className="btn btn-success">
                Guardar
              </button>
              <button
                type="button"
                className="btn btn-danger ml-2"
                onClick={() => toogleModal(false)}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default CreateOrUpdateOperador;
