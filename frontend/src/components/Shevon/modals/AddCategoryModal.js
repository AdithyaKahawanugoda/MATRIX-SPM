import React from "react";
import { Modal } from "react-responsive-modal";
import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object({
  categoryName: Yup.string().required("Category Name is required"),
});

const AddCategoryModal = ({ setModalVisible, modalVisible }) => {
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
      <div className="px-4 pt-6 pb-4 md:pb-7 md:px-8">
        <h6 className="ml-4 mt-0 mb-1 font-black text-2xl text-center">
          Add New Category
        </h6>
        <hr></hr>

        <Formik
          initialValues={{ categoryName: "" }}
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
              <div className="flex flex-col mb-6 ml-1 mt-10">
                <div className="flex ">
                  <div className=" ml-3 flex-initial">
                    <label
                      className="block text-sm font-medium leading-149 mt-1 md:text-lg"
                      htmlFor={"categoryName"}
                    >
                      CategoryName:
                    </label>
                  </div>
                  <div className="flex-initial" style={{ marginLeft: "10px" }}>
                    <input
                      className={`focus:outline-none w-72 h-8 pl-2 border-2 rounded-lg border-lightSilver focus:border-halloweenOrange  ${
                        errors.categoryName && touched.categoryName
                          ? "border-red-500"
                          : "border-gray-600"
                      } text-base`}
                      id="categoryName"
                      type="text"
                      placeholder="Enter Category Name"
                      onChange={handleChange("categoryName")}
                      value={values.categoryName}
                    />
                    {errors.categoryName && touched.categoryName ? (
                      <div className="text-red-500 text-xs mt-1 md:text-sm">
                        {errors.categoryName}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="text-center mb-4 mt-10">
                <button
                  type="submit"
                  className="bg-gamboge hover:bg-halloweenOrange text-md text-white font-bold py-2 px-6 rounded-full"
                  style={{
                    boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
                  }}
                >
                  ADD
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default AddCategoryModal;
