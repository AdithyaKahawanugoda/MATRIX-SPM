import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import * as Yup from "yup";
import { Formik } from "formik";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Divider from "@material-ui/core/Divider";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  Username: Yup.string()
    .min(6, "Please enter a valid username")
    .required("Username is required"),
});

const AdminUserAccount = () => {
  return (
    <div>
      <div className="w-4/5 h-auto bg-lightSilver m-auto p-10 mb-7">
        <div className="shadow-2xl bg-white">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <div>
                <div className="border-blue-900 w-max h-auto m-auto bg-prussianBlue p-1">
                  {" "}
                  <Avatar
                    variant="square"
                    style={{ width: "200px", height: "200px", margin: "auto" }}
                    src="https://i.ibb.co/RcCBbZZ/imgonline-com-ua-resize-1w-Bbm-Or6qqh.jpg"
                  ></Avatar>
                </div>
                <div className="w-max h-auto m-auto p-2">
                  <ImageSearchIcon style={{ fontSize: 40, margin: "auto" }} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <div>
                {" "}
                <div className="px-2 pt-8 pb-4 md:pb-7 md:px-8">
                  <Formik
                    initialValues={{ email: "", username: "" }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                      console.log(values);
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
                        <div className="flex flex-col mb-6">
                          <div className="pb-6 md:pr-3 md:mb-0 w-full">
                            <label
                              className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                              htmlFor={"email"}
                            >
                              Email
                            </label>
                            <input
                              className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                errors.email && touched.email
                                  ? "border-red-500"
                                  : "border-gray-600"
                              } text-base`}
                              id="email"
                              type="text"
                              placeholder="Admin123@matrix.com"
                              onChange={handleChange("email")}
                              value={"Admin123@matrix.com"}
                            />
                            {errors.email && touched.email ? (
                              <div className="text-red-500 text-xs mt-1 md:text-sm">
                                {errors.email}
                              </div>
                            ) : null}
                          </div>
                          <div className="pb-6 md:pr-3 md:mb-0 w-full">
                            <label
                              className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                              htmlFor={"username"}
                            >
                              Username
                            </label>
                            <input
                              className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                errors.Username && touched.Username
                                  ? "border-red-500"
                                  : "border-gray-600"
                              } text-base`}
                              id="username"
                              type="text"
                              placeholder="Admin"
                              onChange={handleChange("username")}
                              value={"Admin"}
                            />
                            {errors.password && touched.password ? (
                              <div className="text-red-500 text-xs mt-1 md:text-sm">
                                {errors.password}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="text-center mb-4 md:mb-6">
                          <button
                            type="submit"
                            className="focus:outline-none bg-prussianBlue text-snow-900 text-base rounded border hover:border-transparent w-32 h-10 sm:w-80 sm:h-12"
                            style={{
                              boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
                              float: "right",
                              color: "white",
                            }}
                          >
                            UPDATE
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <Divider style={{ height: "1px", backgroundColor: "black" }} />

      <div className="m-5">
        <button
          type="submit"
          className="m-5 focus:outline-none bg-prussianBlue text-snow-900 text-base rounded border hover:border-transparent w-52 h-10 sm:w-80 sm:h-12"
          style={{
            boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",

            color: "white",
          }}
        >
          Request Delivery Report
        </button>

        <button
          type="submit"
          className="focus:outline-none bg-prussianBlue text-snow-900 text-base rounded border hover:border-transparent w-52 h-10 sm:w-80 sm:h-12"
          style={{
            boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",

            color: "white",
          }}
        >
          Request Inventory Report
        </button>
      </div>
    </div>
  );
};

export default AdminUserAccount;
