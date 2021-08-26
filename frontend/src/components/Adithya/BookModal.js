import React from "react";
import { Modal } from "react-responsive-modal";
import { Image } from "cloudinary-react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
const BookModal = ({
  setModalVisible,
  modalVisible,
  bookID,
  publishingTitle,
  originalTitle,
  Translator,
  originalAuthor,
  ISBN,
  bookImage,
}) => {
  const deleteBookHandler = async () => {
    await axios
      .delete(
        "http://localhost:6500/matrix/api/inventoryManager/deleteBook",
        ISBN
      )
      .then((res) => {
        alert("Data Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
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
          borderRadius: "10px",
          maxWidth: "30vw",
        },
      }}
      focusTrapped={true}
    >
      <div className=" w-2/3 m-auto pt-8">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <div className=" m-1">
              {" "}
              <h1 className="text-lg font-bold text-prussianBlue"> </h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className=" m-1">
              <div className="w-32 h-48 p-1">
                <Image
                  className="w-full h-full object-contain"
                  cloudName="grid1234"
                  publicId={bookImage.imagePublicId}
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <div className=" m-1">
              <h1 className="text-lg   font-bold text-prussianBlue">
                {" "}
                ISBN :{" "}
              </h1>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className=" m-1">
              <h1 className="text-lg font-bold text-prussianBlue">{ISBN}</h1>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <div className=" m-1">
              <h1 className="text-lg   font-bold text-prussianBlue">
                {" "}
                Book ID :
              </h1>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className=" m-1">
              <h1 className="text-lg font-bold text-prussianBlue">{bookID}</h1>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <div className=" m-1">
              {" "}
              <h1 className="text-lg   font-bold text-prussianBlue">
                {" "}
                Publishing Title :
              </h1>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className=" m-1">
              <h1 className="text-lg font-bold text-prussianBlue">
                {publishingTitle}
              </h1>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <div className=" m-1">
              {" "}
              <h1 className="text-lg   font-bold text-prussianBlue">
                {" "}
                Original Title :
              </h1>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className=" m-1">
              <h1 className="text-lg font-bold text-prussianBlue">
                {originalTitle}
              </h1>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <div className=" m-1">
              <h1 className="text-lg   font-bold text-prussianBlue">
                {" "}
                Translator :
              </h1>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className=" m-1">
              <h1 className="text-lg font-bold text-prussianBlue">
                {Translator}
              </h1>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={4}>
            <div className=" m-1">
              {" "}
              <h1 className="text-lg   font-bold text-prussianBlue">
                {" "}
                Original Author :
              </h1>{" "}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className=" m-1">
              <h1 className="text-lg font-bold text-prussianBlue">
                {" "}
                {originalAuthor}
              </h1>
            </div>
          </Grid>
        </Grid>
        <button
          type="submit"
          className="focus:outline-none bg-gamboge font-semibold text-lg rounded py-2 px-6 mt-7"
          style={{
            boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
          }}
        >
          EDIT
        </button>
        <button
          type="submit"
          className="focus:outline-none bg-ferrariRed ml-8 text-white font-semibold text-lg rounded py-2 px-6 mt-7"
          style={{
            boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
          }}
          onClick={deleteBookHandler}
        >
          DELETE
        </button>
      </div>
    </Modal>
  );
};

export default BookModal;
