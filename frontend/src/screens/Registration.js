import React from "react";
import Grid from "@material-ui/core/Grid";
import RegistrationForm from "../components/Adithya/RegistrationForm";
const Registration = () => {
  return (
    <>
      <Grid container spacing={3} className=" lg:px-20 md:px-12 sm:px-4">
        <Grid item xs={12} sm={12} md={9}>
          <div className="border border-black border-2 m-1">
            <RegistrationForm />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="border border-black border-2 m-1">Static Img</div>
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
