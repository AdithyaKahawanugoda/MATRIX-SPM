import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";

const SingleProductDetails = () => {
  const [value, setValue] = useState(4);

  return (
    <Grid container className="px-32 pt-28 pb-10">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        xs={12}
      >
        <Grid item xs={12} md={6} className="">
          <div className=" font-boldTallFont font-semibold text-6xl p-4">
            LIMPOPO GALABASI
            <div className="font-semibold text-lg font-medievalFont">
              (TWENTY CHICKENS FOR A SADDLE - ROBYN SCOTT)
            </div>
          </div>
          <div className="flex space-x-2 my-6">
            <p>Translated by </p>
            <p className="font-semibold">PRIYANKA KAHAWANUGODA</p>
          </div>
          <div className="font-semibold opacity-80">About book</div>
          <div className="p-4 font-contentFont opacity-80">
            Botswana in 1987 is a well-off country: politically stable,
            economically viable, peacefully integrated—the perfect place for
            Keith and Linda Scott to reinvent their lives. A family of wanderers
            who make up their own rules as they go, the Scotts are a traveling
            circus of offbeat philosophies, can-do spirit, and love of
            adventure. As Keith and Linda settle their three children in the
            bush of Botswana, they create a world of their own design, one of
            personal expression and constant wonder, one where experience is
            valued above all else. Eldest daughter Robyn Scott tells the story
            of her family’s time in Botswana in her memoir Twenty Chickens for a
            SaddleTwenty Chickens for a Saddle, a lively and loving reminiscence
            of her childhood in Africa.
          </div>
          <div className="font-semibold opacity-80">About author</div>
          <div className="p-4 font-contentFont opacity-80">
            Born in 1981, Robyn Scott began her formal education at the age of
            fourteen, when she started boarding school in Zimbabwe. Moving to
            New Zealand for her undergraduate degree, she studied bioinformatics
            at the University of Auckland. In 2004, she was awarded a Gates
            Scholarship to Cambridge University, where she took an MPhil in
            Bioscience Enterprise, focused on the pricing of medicines in
            developing countries. Robyn lives in London, but visits and works
            regularly in southern Africa.
          </div>
          <div className="flex align-baseline my-8">
            <div className="pt-1 font-semibold font-contentFont">
              {" "}
              Avg. rating{" "}
            </div>
            <div>
              <Rating
                className="mx-3"
                disabled={`${localStorage.getItem("authToken") ? true : false}`}
                name="simple-controlled"
                value={value}
                size="large"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="flex justify-center pl-10">
          <div className=" w-3/6 h-full p-0 rounded-xl ml-10 mb-10">
            <img
              src="https://i.ibb.co/KyH4t4K/Untitled-1-2.jpg"
              alt="single-book-img"
              width="100%"
              height="100%"
              className=" object-contain rounded-t-xl"
            />
            <div className=" text-center font-boldTallFont text-white bg-ferrariRed opacity-90 hover:opacity-100 font-semibold text-2xl pb-2">
              20% SUMMER OFF
            </div>
            <div className="font-boldTallFont font-semibold text-4xl pb-2 my-2">
              LKR 850
            </div>
            <div>
              <button className=" rounded px-6 py-1 mx-2 my-2 text-white font-semibold border bg-halloweenOrange">
                ADD TO CART
              </button>
              <button className=" rounded px-6 py-1 mx-2 my-2 text-white font-semibold border bg-blueSapphire">
                BUY NOW
              </button>
              <button className=" rounded px-6 py-1 mx-2 my-2 text-black font-semibold border bg-lightSilver">
                ADD TO WISHLIST
              </button>
              <button className=" rounded px-6 py-1 mx-2 my-2 text-white font-semibold border bg-blueSapphire">
                SHOP NOW
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={10} className="mb-12">
        <div className="font-semibold text-2xl py-4">Customer Reviews</div>
        <div className="border-4 border-lightSilver rounded h-72">
          <div className="border border-black border-2 m-1 overflow-y-auto h-5/6"></div>
          <p className="font-extralight text-xs p-0 ml-4">
            *customer reviews can only place after purchasing books
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default SingleProductDetails;
