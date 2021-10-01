import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import { useLocation } from "react-router";
import { Image } from "cloudinary-react";
import axios from "axios";

const SingleProductDetails = () => {
  const location = useLocation();
  const bookISBN = location.pathname.split("book/")[1];

  const [triggerGetBookData, setTriggerGetBookData] = useState(false);
  const [value, setValue] = useState(4);
  const [bookData, setBookData] = useState({
    publishingTitle: "",
    originalTitle: "",
    translator: "",
    originalAuthor: "",
    aboutAuthor: "",
    aboutBook: "",
    ISBN: "",
    category: "",
    license: "",
    inStockQuantity: "",
    translatorContact: "",
    press: "",
    proofReader: "",
    coverDesigner: "",
    typeSetter: "",
    weight: "",
    marketPrice: "",
    imagePublicId: "",
    imageSecURL: "",
    coverCost: "",
    licenseCost: "",
    writerPayment: "",
    proofReadingPayment: "",
    typeSetterPayment: "",
    printCost: "",
  });

  let hasToken;
  let hasRole;

  if (localStorage.getItem("authToken")) {
    hasToken = localStorage.getItem("authToken");
  }
  if (localStorage.getItem("userRole")) {
    hasRole = localStorage.getItem("userRole");
  }

  useEffect(() => {
    const getBookData = async () => {
      if (bookISBN) {
        await axios
          .get(
            `http://localhost:6500/matrix/api/inventoryManager/get-book/${bookISBN}`
          )
          .then((res) => {
            setBookData((prevState) => {
              return {
                publishingTitle: res?.data?.book?.publishingTitle,
                originalTitle: res?.data?.book?.originalTitle,
                translator: res?.data?.book?.translator,
                originalAuthor: res?.data?.book?.originalAuthor,
                aboutAuthor: res?.data?.book?.aboutAuthor,
                aboutBook: res?.data?.book?.aboutBook,
                ISBN: res?.data?.book?.ISBN,
                category: res?.data?.book?.category,
                license: res?.data?.book?.license,
                inStockQuantity: res?.data?.book?.inStockQuantity,
                translatorContact: res?.data?.book?.translatorContact,
                press: res?.data?.book?.press,
                proofReader: res?.data?.book?.proofReader,
                coverDesigner: res?.data?.book?.coverDesigner,
                typeSetter: res?.data?.book?.typeSetter,
                weight: res?.data?.book?.weight,
                marketPrice: res?.data?.book?.marketPrice,
                imagePublicId: res?.data?.book?.bookImage?.imagePublicId,
                imageSecURL: res?.data?.book?.bookImage?.imageSecURL,
                coverCost: res?.data?.book?.charges?.coverCost,
                licenseCost: res?.data?.book?.charges?.licenseCost,
                writerPayment: res?.data?.book?.charges?.writerPayment,
                proofReadingPayment:
                  res?.data?.book?.charges?.proofReadingPayment,
                typeSetterPayment: res?.data?.book?.charges?.typeSetterPayment,
                printCost: res?.data?.book?.charges?.printCost,
              };
            });
          })
          .catch((err) => {
            alert(err.response.data.desc);
          });
      }
    };
    getBookData();
  }, [bookISBN, triggerGetBookData]);

  return (
    <Grid
      container
      className=" px-40 pt-28 pb-10 "
      style={{
        background:
          "linear-gradient(135deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 1) 0%, hsla(191, 14%, 85%, 1) 100%)",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        xs={12}
      >
        <Grid item xs={12} md={6} className="">
          <div className=" font-boldTallFont font-semibold text-6xl p-4">
            {bookData?.publishingTitle}
            <div className="font-semibold text-lg font-medievalFont">
              ({bookData?.originalTitle} - {bookData?.originalAuthor})
            </div>
          </div>
          <div className="flex space-x-2 my-6">
            <p>Translated by </p>
            <p className="font-semibold">{bookData.translator}</p>
          </div>
          <div className="font-semibold opacity-80">About book</div>
          <div className="p-4 font-contentFont opacity-80">
            {bookData?.aboutBook}
          </div>
          <div className="font-semibold opacity-80">About author</div>
          <div className="p-4 font-contentFont opacity-80">
            {bookData?.aboutAuthor}
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
            <div className="mt-10 m-auto  max-w-lg flex justify-center">
              {bookData?.imagePublicId?.length > 1 ? (
                <Image
                  className=" rounded-t"
                  cloudName="grid1234"
                  publicId={bookData.imagePublicId}
                />
              ) : null}
            </div>
            <div className=" text-center font-boldTallFont text-white bg-ferrariRed opacity-90 hover:opacity-100 font-semibold text-2xl pb-2">
              20% SUMMER OFF
            </div>
            <div className="font-boldTallFont font-semibold text-4xl pb-2 my-2">
              LKR.{bookData?.marketPrice}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {hasRole && hasToken ? (
                <>
                  <button className=" rounded px-6 py-1 my-2 text-white font-semibold border bg-halloweenOrange">
                    ADD TO CART
                  </button>
                  <button className=" rounded px-6 py-1  my-2 text-white font-semibold border bg-blueSapphire">
                    BUY NOW
                  </button>
                  <button className=" rounded px-6 py-1 my-2 text-black font-semibold border bg-lightSilver">
                    ADD TO WISHLIST
                  </button>
                </>
              ) : null}
              <button className=" rounded px-6 py-1 my-2 text-white font-semibold border bg-blueSapphire">
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
