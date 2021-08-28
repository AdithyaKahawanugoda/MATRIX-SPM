import React from "react";
import { Modal } from "react-responsive-modal";
import Grid from "@material-ui/core/Grid";

const SalesModal = ({ setModalVisible, modalVisible }) => {
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
      <div className="px-2 pt-8 pb-4 md:pb-7 md:px-8">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={9}>
            <div className="border border-black border-2 m-1">
              xs=12 sm=6 md=9
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="border border-black border-2 m-1">
              xs=12 sm=6 md=3
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="border border-black border-2 m-1">xs=12 md=4</div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="border border-black border-2 m-1">xs=12 md=5</div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="border border-black border-2 m-1">xs=12 md=3</div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="border border-black border-2 m-1">xs=12 md=4</div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="border border-black border-2 m-1">xs=12 md=5</div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="border border-black border-2 m-1">xs=12 md=3</div>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default SalesModal;
