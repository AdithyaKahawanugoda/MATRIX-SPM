import React from "react";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";

const RegistrationForm = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="border border-black border-2 m-1">REGISTRATION</div>
        </Grid>
        <Hidden only={["md", "lg", "xl"]}>
          <Grid item xs={12} md={6}>
            <div className="border border-black border-2 m-1">
              <div>IMG1</div>
              <div>IMG1</div>
              <div>IMG1</div>
              <div>IMG</div>
              <div>IMG</div>
              <div>IMG</div>
              <div>IMG</div>
              <div>IMG</div>
              <div>IMG</div>
              <div>IMG</div>
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <div className="border border-black border-2 m-1">
            <Grid item xs={12}>
              <div className="border border-black border-2 lg:my-12 md:my-9 sm:my-6">
                USER NAME
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="border border-black border-2 lg:my-12 md:my-9 sm:my-6">
                EMAIL
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="border border-black border-2 lg:my-12 md:my-9 sm:my-6">
                PASSWORD
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="border border-black border-2 lg:my-12 md:my-9 sm:my-6">
                CONFIRM PASSWORD
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="border border-black border-2 lg:my-12 md:my-9 sm:my-6">
                ADDRESS
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="border border-black border-2 lg:my-12 md:my-9 sm:my-6">
                PHONE
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="border border-black border-2 lg:my-12 md:my-9 sm:my-6">
                SUBMIT BTN
              </div>
            </Grid>
          </div>
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={12} md={6}>
            <div className="border border-black border-2 m-1">
              <div>IMG2</div>
              <div>IMG2</div>
              <div>IMG2</div>
              <div>IMG2</div>
              <div>IMG</div>
              <div>IMG</div>
              <div>IMG</div>
              <div>IMG</div>
              <div>IMG</div>
              <div>IMG</div>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
};

export default RegistrationForm;
