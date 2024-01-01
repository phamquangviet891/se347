import React, { useState } from "react";
import SelectCategorySeller from "./SelectCategorySeller";

const AddCategoryModal = ({ handleConfirm, handleCloseModal }) => {
  return (
    <>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        onClick={handleCloseModal}
      >
        <div
          className="relative p-4 w-8/12 max-h-full"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="relative bg-white rounded-md shadow">
            <div className="flex items-center justify-between p-4 rounded-t">
              <h3 className="text-blue-500 font-semibold text-2xl mx-5">
                Select A Category
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleCloseModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <SelectCategorySeller />

            <div className="flex items-center justify-end gap-5 p-4 border-gray-200 rounded-b">
              <button
                type="button"
                className="w-[150px] ms-3 text-blue-500 bg-white hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-sm border-2 border-blue-300 text-base font-medium px-5 py-1.5 hover:text-gray-900 focus:z-10"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-base px-5 py-1.5 text-center"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategoryModal;
