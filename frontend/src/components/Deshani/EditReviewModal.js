import React,{useState} from "react";
import { Modal } from "react-responsive-modal";
import { Formik } from "formik";
import Rating from '@material-ui/lab/Rating';



const EditReviewModal = ({ setModalVisible, modalVisible }) => {
    const [value, setValue] = useState(2);

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
          borderRadius: "8px",
          maxWidth: "500px",
          width: "50%",
        },
      }}
      focusTrapped={true}
    >
      <div className="px-2 pt-8 pb-4 md:pb-7 md:px-8">
        <Formik
          initialValues={{ bookName: "", rating: "", comment:"" }}
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
                <div className="pb-6 md:pr-3 md:mb-0 w-full">
                  <label
                    className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                    htmlFor={"bookName"}
                  >
                   Book Name
                  </label>
                  <input
                    className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 text-base`}
                    id="email"
                    type="text"
                    onChange={handleChange("bookName")}
                    value={values.bookName}
                  />
                </div>
                <div className="pb-6 md:pr-3 md:mb-0 w-full">
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
                </div>
                <div className="pb-6 md:pr-3 md:mb-0 w-full">
                  <label
                    className="block text-sm font-medium leading-149 mb-3 md:text-lg"
                    htmlFor={"comment"}
                  >
                  Comment
                  </label>
                  <input
                    className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 text-base`}
                    id="comment"
                    type="text"
                    onChange={handleChange("comment")}
                    value={values.comment}
                  />
                </div>
              </div>
              <div className="text-center mb-4 md:mb-6">
                <button
                  type="submit"
                  className="focus:outline-none bg-yellow-500 text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12"
                  style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }}
                >
                  Submit
                </button>
                <button
                type="submit"
                className="focus:outline-none bg-yellow-500 text-snow-900 text-base rounded border hover:border-transparent w-64 h-10 sm:w-80 sm:h-12"
                style={{ boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)" }}
              >
                Cancel
              </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default EditReviewModal;
