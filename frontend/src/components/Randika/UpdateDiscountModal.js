import React from "react";
import axios from "axios";
import { Modal } from "react-responsive-modal";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object({
  lable: Yup.string()
    .trim()
    .uppercase()
    .required("Discount Lable  is required"),
  regularPercentage: Yup.number()
    .positive()
    .integer()
    .min(1, "Please enter a valid percentage")
    .required("Regular Percentage number is required"),
  bulkPercentage: Yup.number()
    .positive()
    .integer()
    .min(1, "Please enter a valid percentage")
    .required("Bulk Percentage is required"),
});

const SampleNewsletterModal = ({
  setModalVisible,
  modalVisible,
  setDiscountlable,
  bulkPercentage,
  regularPercentage,
  bookID,
  removeModalOpen,
}) => {
  const removeDiscount = async () => {
    let dataObject = {

      BID: bookID,
    };

    try {
      await axios
        .put(
          "http://localhost:6500/matrix/api/admin/removeDiscounts",
          dataObject
        )
        .then(() => {
          window.location.reload(false);
        });
    } catch (err) {
      alert("error :" + err);
    }
  };

  const updateDiscount = async (values) => {
    let dataObject = {
      regular: values.regularPercentage,
      bulk: values.bulkPercentage,
      label: values.lable.toUpperCase(),
      BID: bookID, 
    };

    try {
      await axios
        .put(
          "http://localhost:6500/matrix/api/admin/updateDiscounts",
          dataObject
        )
        .then(() => {
          window.location.reload(false);
        });
    } catch (err) {
      alert("error :" + err);
    }
  };
  return (
    <Modal
      open={modalVisible}
      onClose={() => {
        setModalVisible(false);
      }}
      center
      styles={{
        modal: {
          //   border: "3px solid  black",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "100%",
          marginTop: "5vw",
        },
      }}
      focusTrapped={true}
    >
      {!removeModalOpen && (
        <div className="m-auto">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={12}>
              <div>
                <div className="w-full  h-auto mb-5 bg-lightSilver m-auto">
                  <div className="w-full m-auto mt-5 bg-white p-5 rounded-lg shadow-lg">
                    <div className="mt-4">
                      <Formik
                        initialValues={{
                          lable: setDiscountlable,
                          regularPercentage: regularPercentage,
                          bulkPercentage: bulkPercentage,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                          updateDiscount(values);
                        }}
                      >
                        {({
                          handleChange,
                          handleSubmit,
                          values,
                          errors,
                          touched,
                        }) => (
                          <form
                            onSubmit={(event) => {
                              event.preventDefault();
                              handleSubmit();
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid item md={4}>
                                <div>
                                  <h1 className="text-l text-left text-black font-bold mb-5 ">
                                    Regular Percentage
                                  </h1>
                                </div>
                              </Grid>
                              <Grid item md={6}>
                                <div>
                                  <input
                                    className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                      errors.regularPercentage &&
                                      touched.regularPercentage
                                        ? "border-red-500"
                                        : "border-gray-600"
                                    } text-base`}
                                    id="regularPercentage"
                                    type="text"
                                    placeholder=""
                                    onChange={handleChange("regularPercentage")}
                                    value={values.regularPercentage}
                                  />
                                  {errors.regularPercentage &&
                                  touched.regularPercentage ? (
                                    <div className="text-red-500 text-xs mt-1 md:text-sm">
                                      {errors.regularPercentage}
                                    </div>
                                  ) : null}
                                </div>
                              </Grid>
                              <Grid item md={4}>
                                <div>
                                  <h1 className="text-l text-left text-black font-bold mb-5">
                                    Bulk Percentage
                                  </h1>
                                </div>
                              </Grid>
                              <Grid item md={6}>
                                <div>
                                  <input
                                    className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                      errors.bulkPercentage &&
                                      touched.bulkPercentage
                                        ? "border-red-500"
                                        : "border-gray-600"
                                    } text-base`}
                                    id="bulkPercentage"
                                    type="text"
                                    placeholder=""
                                    onChange={handleChange("bulkPercentage")}
                                    value={values.bulkPercentage}
                                  />
                                  {errors.bulkPercentage &&
                                  touched.bulkPercentage ? (
                                    <div className="text-red-500 text-xs mt-1 md:text-sm">
                                      {errors.bulkPercentage}
                                    </div>
                                  ) : null}
                                </div>
                              </Grid>
                              <Grid item md={4}>
                                <div>
                                  <h1 className="text-l text-left text-black font-bold mb-5 ">
                                    lable
                                  </h1>
                                </div>
                              </Grid>
                              <Grid item md={6}>
                                <div>
                                  {" "}
                                  <input
                                    className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                      errors.lable && touched.lable
                                        ? "border-red-500"
                                        : "border-gray-600"
                                    } text-base`}
                                    id="lable"
                                    type="text"
                                    placeholder=""
                                    onChange={handleChange("lable")}
                                    value={values.lable}
                                  />
                                  {errors.lable && touched.lable ? (
                                    <div className="text-red-500 text-xs mt-1 md:text-sm">
                                      {errors.lable}
                                    </div>
                                  ) : null}
                                </div>
                              </Grid>

                              <Grid item md={12}>
                                <div className="w-max m-auto">
                                  <button
                                    type="submit"
                                    className="object-center focus:outline-none bg-gamboge text-snow-900 text-base rounded border hover:border-transparent w-32 h-10"
                                    style={{
                                      boxShadow:
                                        "0px 10px 15px rgba(3, 17, 86, 0.25)",
                                      float: "right",
                                      color: "white",
                                    }}
                                  >
                                    ADD
                                  </button>
                                </div>
                              </Grid>
                            </Grid>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
      {removeModalOpen && (
        <div className="w-96 m-auto mt-7 h-40">
          <h1 className="text-lg text-center text-red-700 font-bold mb-2">
            Do you need to remove discount from this item?
          </h1>
          <button
            type="submit"
            className="focus:outline-none text-snow-900 text-base rounded border hover:border-transparent w-32 h-10 sm:w-80 sm:h-12 bg-gamboge"
            style={{
              boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
              float: "right",
              color: "white",
            }}
            onClick={() => {
              setModalVisible(false);
            }}
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="focus:outline-none text-snow-900 text-base rounded border hover:border-transparent w-32 h-10 sm:w-80 sm:h-12 bg-gamboge"
            style={{
              boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
              float: "right",
              color: "white",
            }}
            onClick={() => {
              removeDiscount();
              setModalVisible(false);
            }}
          >
            DELETE
          </button>
        </div>
      )}
    </Modal>
  );
};

export default SampleNewsletterModal;
