import React from "react";
import { Modal } from "react-responsive-modal";
import Grid from "@material-ui/core/Grid";

const ReplyFaqModal = ({ setModalVisible, modalVisible }) => {
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
          maxWidth: "600px",
          width: "100%",
          marginTop: "5vw",
        },
      }}
      focusTrapped={true}
    >
      <div className="px-2 pt-8 pb-4 md:pb-7 md:px-8">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Grid container spacing={1}>
            <Grid item md={4} >
              <div className="ml-10">Reply Message</div>
            </Grid>
            <Grid item md={6}>
              <div>
                <textarea
                  className="focus:outline-none w-full pb-2 md:pb-3 border-gray-400 border-2 focus:border-blue-900 text-base bg-white"
                  id="description"
                  type="text"
                  value={""}
                  rows={5}
                  cols={5}
                />
              </div>
            </Grid>

            <Grid item md={12}>
              <button
                type="submit"
                className="focus:outline-none text-snow-900 text-base rounded border hover:border-transparent w-32 h-10 sm:w-80 sm:h-12  bg-gamboge"
                style={{
                  boxShadow: "0px 10px 15px rgba(3, 17, 86, 0.25)",
                  float: "right",
                  color: "white",
                }}
              >
                Send
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Modal>
  );
};

export default ReplyFaqModal;
