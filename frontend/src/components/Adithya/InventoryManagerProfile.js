import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const InventoryManagerProfile = () => {
  return (
    <div>
      <Grid item xs={12}>
        <Paper class=" rounded-xl px-3 py-3 text-center border-0  shadow-md bg-blueSapphire bg-opacity-30">
          <header class="font-contentFont text-4xl mb-3 font-bold text-prussianBlue ">
            Profile Information
          </header>
        </Paper>
      </Grid>
      <div class="grid grid-row-3 space-y-10">
        <div className="rounded-xl my-1 mx-1 px-5 py-5   shadow-md bg-blueSapphire bg-opacity-10">
          <h6 className="ml-4 mt-0 mb-2 font-black text-lg">
            Personal Details
          </h6>

          <div className="grid grid-row-2">
            <div className="grid grid-cols-3 ">
              <div className="grid grid-rows-3">
                <div className="rounded-l-xl my-1 ml-10 mr-2 px-5 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className="font-black text-blueSapphire text-md">
                    FullName
                  </h6>
                </div>
                <div className="rounded-l-xl my-1 ml-10 mr-2 px-5 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className=" font-black text-blueSapphire text-md">
                    Email Address
                  </h6>
                </div>
                <div className="rounded-l-xl my-1 ml-10 mr-2 px-5 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className=" font-black text-blueSapphire text-md">
                    Mobile Number
                  </h6>
                </div>
              </div>

              <div className="col-span-2 grid grid-rows-3">
                <div className="rounded-r-xl my-1 mr-20 px-4 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className=" font-medium text-md">Adithya Kahawanugoda</h6>
                </div>
                <div className="rounded-r-xl my-1  mr-20 px-4 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className=" font-medium text-md">
                    adithyainventory@gmail.com
                  </h6>
                </div>
                <div className="rounded-r-xl my-1  mr-20 px-4 py-4 shadow-md bg-white bg-opacity-20">
                  <h6 className=" font-medium text-md">+94772480467</h6>
                </div>
              </div>
            </div>

            <div className="rounded-xl mt-6 mb-0 text-right">
              <button class="bg-blueSapphire hover:bg-prussianBlue text-md text-white font-bold py-3 px-8 rounded-full">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl my-1 mx-1 px-5 py-5 w-1/4 shadow-md bg-prussianBlue bg-opacity-30">
          <div className="grid grid-cols-2">
            <div>
              <h6 className="ml-4 mt-2 font-black text-lg">Ledger Report</h6>
            </div>
            <div className=" mt-0 mb-0 text-right">
              <button class="bg-blueSapphire hover:bg-prussianBlue text-md text-white font-bold py-3 px-6 rounded-full">
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagerProfile;
