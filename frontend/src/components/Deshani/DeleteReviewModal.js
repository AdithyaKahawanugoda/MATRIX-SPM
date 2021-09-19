import React from 'react';
import { Modal } from "react-responsive-modal";
import { Formik } from "formik";

const DeleteReviewModal = ({setModalVisible, modalVisible}) => {
    return (
        <div>
        <Modal
        open={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        center
        styles={{
          modal: {
            border: "3px solid  black",
            borderRadius: "8px",
            maxWidth: "500px",
            width: "50%",
          },
        }}
        focusTrapped={true}
      >
      <div className="px-2 pt-8 pb-4 md:pb-7 md:px-8">
        <Formik
  
  
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              <div className="flex flex-col mb-6">
              <h1 className="mb-5 font-bold text-2xl">Delete Review</h1>
                <div className="pb-6 md:pr-3 md:mb-0 w-full">
                  <label
                    className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                    htmlFor={"email"}
                  >
                    Are you sure you want to delete the Review?
                  </label>
                </div>
              </div>
              <div className="flex flex-row  space-x-2 text-center mb-4 md:mb-6 ml-12">
                <button
                  type="submit"
                  className="focus:outline-none bg-yellow-500 text-snow-900 text-base rounded border hover:border-transparent w-40 h-10 sm:w-80 sm:h-12"
                  style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }}
                >
                  DELETE REVIEW
                </button>
                <button
                type="submit"
                className="focus:outline-none bg-gray-400 text-snow-900 text-base rounded border hover:border-transparent w-40 h-10 sm:w-80 sm:h-12"
                style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }}
              >
                CANCEL
              </button>
              </div>
            </form>
          )}
        </Formik>
        </div>
      </Modal>  
        </div>
    )
}

export default DeleteReviewModal;
