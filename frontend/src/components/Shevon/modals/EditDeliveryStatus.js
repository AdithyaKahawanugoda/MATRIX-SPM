import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object({
  userName: Yup.string().trim().uppercase().required("User Name is required"),
});

const EditDeliveryStatus = ({ setModalVisible, modalVisible }) => {
  return (
    <Modal
      open={modalVisible}
      onClose={() => {
        setModalVisible(false);
      }}
      center
      styles={{
        modal: {
          border: "1px solid  gray",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "50%",
        },
      }}
      focusTrapped={true}
    >
      <div className="px-4 pt-6 pb-4 ">
        <h6 className="ml-4 mt-0 mb-1 font-black text-2xl text-center">
          Update Details
        </h6>
        <hr></hr>

        <Formik
          initialValues={{
            userName: "",
          }}
          validationSchema={validationSchema}
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
              <div className="grid grid-rows-7 gap-y-2 mt-2 justify-center ml-2">
                <div className=" py-2 px-2 grid grid-cols-3 gap-x-2">
                  <div className=" my-1">
                    <label
                      className="block text-sm font-medium leading-149  md:text-lg"
                      htmlFor={"province"}
                    >
                      Delivery Person :
                    </label>
                  </div>
                  <div className=" col-span-2">
                    <select
                      className={`focus:outline-none w-60 h-8 pl-2 border-2 rounded-lg border-lightSilver focus:border-halloweenOrange  ${
                        errors.province && touched.province
                          ? "border-red-500"
                          : "border-gray-600"
                      } text-base`}
                      id="province"
                      type="text"
                      placeholder="Railway station name"
                      onChange={handleChange("province")}
                      value={values.province}
                    >
                      <option value="" disabled selected>
                        Select your option
                      </option>
                      <option value="wp">Western Province</option>
                      <option value="CP">Central Province</option>
                      <option value="EP">Eastern Province</option>
                      <option value="NP">Northern Province</option>
                      <option value="SP">Southern Province</option>
                      <option value="NWP">North Western Province</option>
                      <option value="NCP">North Central Province</option>
                      <option value="UP">Uva Province</option>
                      <option value="SP">Sabaragamuwa Province</option>
                    </select>
                    {errors.province && touched.province ? (
                      <div className="text-red-500 text-xs mt-1 md:text-sm">
                        {errors.province}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="text-center mb-0 mt-6">
                <button
                  type="submit"
                  className="bg-gamboge hover:bg-halloweenOrange text-md text-white font-bold py-2 px-6 rounded-full"
                  style={{
                    boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
                  }}
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default EditDeliveryStatus;
