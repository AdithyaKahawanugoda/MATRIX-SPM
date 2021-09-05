import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import { Image } from "cloudinary-react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
const BookModal = ({ setModalVisible, modalVisible, bookID }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const getBookData = async () => {
      if (bookID) {
        await axios
          .get(``)
          .then((res) => {
            setBookData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    getBookData();
  }, [bookID]);

  const deleteBookHandler = async () => {
    await axios
      .delete(
        "http://localhost:6500/matrix/api/inventoryManager/deleteBook",
        bookData.ISBN
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
          maxWidth: "35vw",
          maxHeight: "80vh",
        },
      }}
      focusTrapped={true}
    >
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} style={{ fontWeight: 900, fontSize: "2rem" }}>
            {"Book Name"}
          </Grid>
          <Grid item xs={12}>
            <div class="mt-10 m-auto mb-3 max-w-lg flex justify-center">
              <img
                src="https://i.ibb.co/KyH4t4K/Untitled-1-2.jpg"
                alt="book-cover-img"
                width="60%"
                height="60%"
                border="0"
                margin="0"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 my-4">
              <div>
                <label className="text-sm font-black md:text-lg">
                  Publishing Title:{" "}
                </label>
                {" Book name"}
                {isEdit && (
                  <input
                    className={`focus:outline-none w-60 h-8 pl-2 border-2 rounded-lg border-lightSilver focus:border-halloweenOrange text-base`}
                    type="text"
                    placeholder="Publishing Title"
                    value={"Book name"}
                  />
                )}
              </div>
              <div>xxxxx</div>
              <div>xxxxx</div>
              <div>xxxxx</div>
              <div>xxxxx</div>
              <div>xxxxx</div>
              <div>xxxxx</div>
            </div>
            <div className="grid grid-cols-2 gap-2 my-4">
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
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default BookModal;
