"use client";
import React from "react";
const ConfirmationModal = ({ isOpen, onConfirm, onCancel, name }: any) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded">
          <p>Tem certeza que deseja excluir? {name}</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={onCancel}
              className="mr-2 bg-gray-300 px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
