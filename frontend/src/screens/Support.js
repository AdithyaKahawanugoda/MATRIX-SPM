import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import ContactUs from "../components/Shevon/ContactUs";
import FAQ from "../components/Shevon/FAQ";

const Support = () => {
  return (
    <div>
      <Grid item xs={12}>
        <Paper class=" px-3 py-3 text-center border-0  shadow-md bg-gamboge ">
          <header class="font-contentFont text-5xl mb-3 font-bold text-prussianBlue ">
            Contact Us
          </header>
        </Paper>
      </Grid>
      <div className="mt-2">
        <ContactUs />
        <FAQ />
      </div>
    </div>
  );
};

export default Support;
