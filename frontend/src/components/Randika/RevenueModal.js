import React from "react";
import { Modal } from "react-responsive-modal";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";

const RevenueModal = ({ setModalVisible, modalVisible }) => {
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
          maxWidth: "800px",
          width: "100%",
        },
      }}
      focusTrapped={true}
    >
      <h1 className="text-lg  text-gamboge font-bold mb-5 ">
                Customer Data
              </h1>
              <Divider />
      <div className="px-2 pt-8 pb-4 md:pb-7 md:px-8 w-2/3 m-auto">
      
        <Grid container spacing={3} className="border border-black border-2 w-2/3 m-auto rounded-lg shadow-2xl">
          <Grid item md={4}>
            <div>Customer ID : </div>
          </Grid>
          <Grid item md={6}>
            <div>U7896</div>
          </Grid>

          <Grid item md={4}>
            <div>Username : </div>
          </Grid>
          <Grid item md={6}>
            <div>customer1 </div>
          </Grid>

          <Grid item md={4}>
            <div>Email : </div>
          </Grid>
          <Grid item md={6}>
            <div>cus1@gmail.com</div>
          </Grid>
        </Grid>
      </div>
      
    </Modal>
  );
};

export default RevenueModal;
