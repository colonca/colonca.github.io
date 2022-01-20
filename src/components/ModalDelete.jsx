import React from 'react';
import Modal from './Modal';

function ModalDelete({ onClose, onDelete }) {
  return (
    <Modal onClose={onClose} size="modal-sm">
      <div className="flex items-center flex-col my-4">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <p className="my-4">
            ¿Está segur@ que desea eliminar estos registros ? Este proceso será
            permanente 🔥
          </p>
        </div>
        <div className="flex mt-2">
          <button
            type="button"
            className="btn btn-success mr-2"
            onClick={() => {
              onDelete();
            }}
          >
            Si, estoy segur@
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onClose()}
          >
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDelete;
