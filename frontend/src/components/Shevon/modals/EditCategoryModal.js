import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import AddQaModal from "./AddQaModal";
import EditQaModal from "./EditQaModal";
import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object({
  categoryName: Yup.string().required("CategoryName required"),
});

const EditFaqModal = ({ setModalVisible, modalVisible }) => {
  const [addQaOPen, setAddQaOpen] = useState(false);
  const [editQaOPen, setEditQaOpen] = useState(false);

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
            border: "1px solid  gray",
            borderRadius: "8px",
            maxWidth: "700px",
            width: "50%",
          },
        }}
        focusTrapped={true}
      >
        <div className="px-4 pt-6 pb-4 md:pb-7 md:px-8">
          <h6 className="ml-4 mt-0 mb-1 font-black text-2xl text-center">
            Update Category
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
                <div className="grid grid-cols-4 mt-3">
                  <div className="text-left  pt-1">
                
                    <label className="block text-sm font-medium leading-149 mb-3 md:text-lg">
                      Category Name :
                    </label>
                  </div>

                  <div>
                    <input
                      className={`focus:outline-none w-64 h-8 pl-2 border-2 rounded-lg focus:border-halloweenOrange border-lightSilver ${
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
                      <div className="text-red-500 text-xs mt-1 ">
                        {errors.categoryName}
                      </div>
                    ) : null}
                  </div>

                  <div className=" col-span-2 text-right">
                    <button
                      type="submit"
                      class="bg-gamboge hover:bg-halloweenOrange text-md text-white font-bold py-2 px-6  rounded-full"
                      style={{
                        boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>

          <div className="  mt-4">
            <div
              className=" h-14  rounded-xl   my-2 mx-0 px-5 pt-4  border-0  shadow-md bg-gamboge bg-opacity-15 hover:bg-halloweenOrange"
              onClick={() => {
                setEditQaOpen(false);
                setAddQaOpen(true);
              }}
            >
              <h5 class="text-white font-black text-md">
                <icons class="text-white mr-5 ">
                  <AddCircleRoundedIcon />
                </icons>{" "}
                Add New Question And Answer
              </h5>
            </div>

            <div
              className="mt-4  shadow-md bg-blueSapphire rounded-xl px-3 py-1 overflow-y-auto"
              style={{ maxHeight: "300px" }}
            >
              <div className="bg-lightSilver rounded-xl  my-2 ">
                <div className="py-2 px-2 font-black">
                  Do you sell audiobooks and / or ebooks?
                </div>

                <hr></hr>

                <div
                  className="py-2 px-2 overflow-y-auto"
                  style={{ maxHeight: "100px" }}
                >
                  Both ebooks and audiobooks are available via distribution
                  partnerships with Hummingbird / My Must Reads (ebooks) and
                  Libro.FM (audiobooks). When available, you can see both ebook
                  and audiobook links on any book product page. Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.
                </div>

                <hr></hr>

                <div className="text-right py-2 px-2">
                  <icons
                    class="mr-4 hover:text-gamboge"
                    onClick={() => {
                      setAddQaOpen(false);
                      setEditQaOpen(true);
                    }}
                  >
                    <EditIcon />
                  </icons>
                  <icons class="mr-4 hover:text-red-600">
                    <DeleteForeverIcon />
                  </icons>
                </div>
              </div>

              <div className="bg-lightSilver rounded-xl  my-2 ">
                <div className="py-2 px-2 font-black">
                  Do you sell audiobooks and / or ebooks?
                </div>

                <hr></hr>

                <div
                  className="py-2 px-2 overflow-y-auto"
                  style={{ maxHeight: "100px" }}
                >
                  Both ebooks and audiobooks are available via distribution
                  partnerships with Hummingbird / My Must Reads (ebooks) and
                  Libro.FM (audiobooks). When available, you can see both ebook
                  and audiobook links on any book product page. Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.
                </div>

                <hr></hr>

                <div className="text-right py-2 px-2">
                  <icons
                    class="mr-4 hover:text-gamboge"
                    onClick={() => {
                      setAddQaOpen(false);
                      setEditQaOpen(true);
                    }}
                  >
                    <EditIcon />
                  </icons>
                  <icons class="mr-4 hover:text-red-600">
                    <DeleteForeverIcon />
                  </icons>
                </div>
              </div>

              <div className="bg-lightSilver rounded-xl  my-2 ">
                <div className="py-2 px-2 font-black">
                  Do you sell audiobooks and / or ebooks?
                </div>

                <hr></hr>

                <div
                  className="py-2 px-2 overflow-y-auto"
                  style={{ maxHeight: "100px" }}
                >
                  Both ebooks and audiobooks are available via distribution
                  partnerships with Hummingbird / My Must Reads (ebooks) and
                  Libro.FM (audiobooks). When available, you can see both ebook
                  and audiobook links on any book product page. Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.Both ebooks and
                  audiobooks are available via distribution partnerships with
                  Hummingbird / My Must Reads (ebooks) and Libro.FM
                  (audiobooks). When available, you can see both ebook and
                  audiobook links on any book product page.
                </div>

                <hr></hr>
                <div className="text-right py-2 px-2">
                  <icons
                    class="mr-4 hover:text-gamboge"
                    onClick={() => {
                      setAddQaOpen(false);
                      setEditQaOpen(true);
                    }}
                  >
                    <EditIcon />
                  </icons>
                  <icons class="mr-4 hover:text-red-600">
                    <DeleteForeverIcon />
                  </icons>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {addQaOPen && (
        <AddQaModal modalVisible={addQaOPen} setModalVisible={setAddQaOpen} />
      )}
      {editQaOPen && (
        <EditQaModal
          modalVisible={editQaOPen}
          setModalVisible={setEditQaOpen}
        />
      )}
    </div>
  );
};

export default EditFaqModal;
