import React,{useState,useEffect} from 'react';
import { Modal } from "react-responsive-modal";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";

const validationSchema = Yup.object({
  username: Yup.string().trim().uppercase().required("User Name is required"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
  address: Yup.string().trim().required("Address is required"),
  phone: Yup.number()
  .positive()
  .integer()
  .min(10, "Please enter a valid phone number")
  .required("Phone number is required")
})

const EditProfileModal = ({ setModalVisible, modalVisible}) => {

  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState("");

  const [updateUserName,setUpdateUserName] = useState("");
  const [updateEmail,setUpdateEmail] = useState("");
  const [updateAddress,setUpdateAddress] = useState("");
  const [updatePhone,setUpdatePhone] = useState("");

  useEffect(() =>{
    const getCustomer = async() =>{
      const config ={
        headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
    };
    try{
      await axios
          .get("http://localhost:6500/matrix/api/customer/profile",config)
          .then((res) =>{
            setUserName(res.data.customer.username);
            setEmail(res.data.customer.email);
            setAddress(res.data.customer.address);
            setPhone(res.data.customer.phone);

          })
          .catch((err) =>{
            alert("Error occured!!! :"+err);
          });
    }catch(error){
      alert("Error occured!!! : " + error)
    }
  };
  getCustomer();
},[]);

const updateCustomerHandler = async () =>{
  const config ={
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };

  let dataObject ={
    updateUserName,
    updateEmail,
    updateAddress,
    updatePhone
  };
  try{
    await axios
        .put(
          "http://localhost:6500/matrix/api/customer/updateProfile",
          dataObject,
          config
        )
        .then((res)=>{
          alert("Customer Update Successfully!")
        })
        .catch((err) =>{
          alert(err);
        });
  }catch(error){
    alert("Error Occured-" + error);
  }
}

    return (
        <Modal
      open={modalVisible}
      onClose={() => {
        setModalVisible(false);
      }}
      center
      styles={{
        modal: {
          border: "3px solid  black",
          borderRadius: "10px",
          maxWidth: "800px",
          width: "100%",
          marginTop:"7rem"
        },
      }}
      focusTrapped={true}
    >
      <div className="px-2 pt-8 pb-4 md:pb-7 md:px-8">
      <Formik
      initialValues={{ username: "",email: "", address: "", phone:"" }}
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
            updateCustomerHandler();
          }}
        >
          <div className="flex flex-col mb-6">
          <h1 className="mb-5 font-bold text-2xl">Edit Profile</h1>
            <div className="pb-6 md:pr-3 md:mb-0 w-full">
              <label
                className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                htmlFor={"username"}
              >
                User Name
              </label>
              <input
                className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                  errors.username && touched.username
                    ? "border-red-500"
                    : "border-gray-600"
                }  text-base`}
                id="username"
                type="text"
                placeholder="Enter you username"
                onChange={(e) =>{
                  setUpdateUserName(e.target.value);
                }}
                value={username}
              />
              {errors.username && touched.username ? (
                <div className="text-red-500 text-xs mt-1 md:text-sm">
                  {errors.username}
                </div>
              ) : null}
            </div>
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
                placeholder="John@cargils.com"
                onChange={(e) =>{
                  setUpdateEmail(e.target.value);
                }}
                value={email}
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
                htmlFor={"address"}
              >
                Address
              </label>
              <input
                className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                  errors.address && touched.address
                    ? "border-red-500"
                    : "border-gray-600"
                }  text-base`}
                id="address"
                type="text"
                placeholder="Enter you delivery address"
                onChange={(e)=>{
                  setUpdateAddress(e.target.value);
                }}
                value={address}
              />
              {errors.address && touched.address ? (
                <div className="text-red-500 text-xs mt-1 md:text-sm">
                  {errors.address}
                </div>
              ) : null}
            </div>
            <div className="pb-6 md:pr-3 md:mb-0 w-full">
              <label
                className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                htmlFor={"phone"}
              >
                Phone
              </label>
              <input
                className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                  errors.phone && touched.phone
                    ? "border-red-500"
                    : "border-gray-600"
                }  text-base`}
                id="phone"
                type="text"
                placeholder="Enter you contact number"
                onChange={(e)=>{
                  setUpdatePhone(e.target.value);
                }}
                value={phone}
              />
              {errors.phone && touched.phone ? (
                <div className="text-red-500 text-xs mt-1 md:text-sm">
                  {errors.phone}
                </div>
              ) : null}
            </div>
          </div>
          <div className=" flex flex-row  space-x-2 text-center mb-4 md:mb-6 ml-8">
            <button
              type="submit"
              className="focus:outline-none bg-yellow-500 text-snow-900 text-base rounded border hover:border-transparent  w-80 h-10 sm:w-80 sm:h-12 "
              style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }}
            >
              SAVE
            </button>
   
            <button
            type="cancel"
            className="focus:outline-none bg-gray-400 text-snow-900 text-base rounded border hover:border-transparent w-80 h-10 sm:w-80 sm:h-12"
            style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)", }}
          >
            CANCEL
          </button>
          </div>
        </form>
      )}
    </Formik>
      </div>
    </Modal>
    )
}

export default EditProfileModal
