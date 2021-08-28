import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import ReplayIcon from "@material-ui/icons/Replay";
import { Hidden } from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object({
  lable: Yup.string()
    .trim()
    .uppercase()
    .required("Discount Lable  is required"),
  regularPercentage: Yup.number()
    .positive()
    .integer()
    .min(1, "Please enter a valid percentage")
    .required("Regular Percentage number is required"),
  bulkPercentage: Yup.number()
    .positive()
    .integer()
    .min(1, "Please enter a valid percentage")
    .required("Bulk Percentage is required"),
});

const useStyles = makeStyles({
  paginationButton: {
    width: "80%",
    height: "40px",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    paddingTop: "10px",

    "& a": {
      margin: "8px",
      border: "1px solid #065774",
      color: "#065774",
      padding: "10px",
      borderRadius: "5px",
      cursor: "ponter",
    },

    "& a:hover": {
      color: "white",
      backgroundColor: "#065774",
    },
  },
});

const data = [
  {
    BookName: "Anne of Green Gables",
    img: "https://i.ibb.co/zn6sSHM/download-1.jpg",
  },
  { BookName: "Dracula", img: "https://i.ibb.co/sQDTJ78/download-5.jpg" },
  {
    BookName: "A Town Like Alice",
    img: "https://i.ibb.co/9Ns64V0/download-2.jpg",
  },
  {
    BookName: "The Color Purple",
    img: "https://i.ibb.co/MBNrv9s/download-3.jpg",
  },
  { BookName: "Frankenstein", img: "https://i.ibb.co/LvnXySj/download-4.jpg" },
  { BookName: "Animal Farm", img: "https://i.ibb.co/M1drW98/download-6.jpg" },
  {
    BookName: "The Handmaid's Tale",
    img: "https://i.ibb.co/tPyPrJS/download.jpg",
  },
  {
    BookName: "Barney's Version",
    img: "https://i.ibb.co/pxyhJ0X/images-1.jpg",
  },
  {
    BookName: "Breakfast of Champions",
    img: "https://i.ibb.co/YL6BRSm/images-3.jpg",
  },
  {
    BookName: "The Brothers Karamazov",
    img: "https://i.ibb.co/2WFNjK0/images-4.jpg",
  },
  {
    BookName: "Brave New World",
    img: "https://i.ibb.co/7J9K9vm/images-5.jpg",
  },
  {
    BookName: "City of Thieves",
    img: "https://i.ibb.co/NLmqS82/images-6.jpg",
  },
  { BookName: "Don Quixote", img: "https://i.ibb.co/FDNLntg/images-7.jpg" },
  { BookName: "Disgrace", img: "https://i.ibb.co/b2NZ8PH/images-8.jpg" },
  {
    BookName: "Crime and Punishment",
    img: "https://i.ibb.co/Wx9R4Vr/images-9.jpg",
  },
  { BookName: "Doomsday Book", img: "https://i.ibb.co/C6T8DcW/images-10.jpg" },
  {
    BookName: "Your House Will Pay",
    img: "https://i.ibb.co/M1xKjc9/images-11.jpg",
  },
  { BookName: "Rebecca", img: "https://i.ibb.co/RjYmp9z/images-12.jpg" },
  {
    BookName: "The Silence of the Lambs",
    img: "https://i.ibb.co/zxJ83f7/images.jpg",
  },
  {
    BookName: "Shutter Island",
    img: "https://i.ibb.co/NLmqS82/images-6.jpg",
  },
];

const Discount = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);
  const [searchTerm, setsearchTerm] = useState("");

  const [selectedBook, setSelectedBook] = useState([]);

  const [books, setBooks] = useState(data);
  const [pageNumber, setPageNumber] = useState(0);

  const bookPerPage = 8;
  const pageVisited = pageNumber * bookPerPage;

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const addDiscount = () => {
    if(selectedBook.length>0){
      alert("discount added!");
    }else{
      alert("Please select at least one book!")
    }
    
  };

  const displayBooks = books
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.BookName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    })
    .slice(pageVisited, pageVisited + bookPerPage)
    .map((book, index) => {
      return (
        <div className="w-1/4 h-28 mb-4" style={{ float: "left" }}>
          <div className="w-full  ">
            <Checkbox
              style={{ float: "left" }}
              inputProps={{
                "aria-label": "uncontrolled-checkbox",
              }}
              onClick={() => {
                selectedBook.push(book.BookName);
              }}
            />
          </div>

          <div className="w-4/5 h-28 ">
            <div className="h-4/5">
              <img
                src={book.img}
                alt="petshop-design-with-cat-and-dog-vector-21771960"
                border="0"
                style={{ width: "80px", height: "80px" }}
              />
            </div>

            <div className="w-full h-1/5 ml-10">
              <h1>{book.BookName}</h1>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(books.length / bookPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <h1 className="text-2xl h-16 text-center text-white font-bold mb-1 bg-prussianBlue pt-4 rounded-lg">
        Add Discounts
      </h1>

      <div className="mt-5">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <div>
              <div className="w-full m-auto h-auto mb-5 bg-lightSilver ml-12">
                <div className="w-full m-auto mt-5 bg-white p-5 rounded-lg shadow-lg">
                  <div className="mt-4">
                    <Formik
                      initialValues={{
                        lable: "",
                        regularPercentage: "0",
                        bulkPercentage: "0",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={async (values) => {
                        console.log(values);
                      }}
                    >
                      {({
                        handleChange,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                      }) => (
                        <form
                          onSubmit={(event) => {
                            event.preventDefault();
                            handleSubmit();
                            addDiscount();
                          }}
                        >
                          <Grid container spacing={2}>
                            <Grid item md={4}>
                              <div>
                                <h1 className="text-l text-left text-black font-bold mb-5 ">
                                  Regular Percentage
                                </h1>
                              </div>
                            </Grid>
                            <Grid item md={6}>
                              <div>
                                <input
                                  className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                    errors.regularPercentage &&
                                    touched.regularPercentage
                                      ? "border-red-500"
                                      : "border-gray-600"
                                  } text-base`}
                                  id="regularPercentage"
                                  type="text"
                                  placeholder=""
                                  onChange={handleChange("regularPercentage")}
                                  value={values.regularPercentage}
                                />
                                {errors.regularPercentage &&
                                touched.regularPercentage ? (
                                  <div className="text-red-500 text-xs mt-1 md:text-sm">
                                    {errors.regularPercentage}
                                  </div>
                                ) : null}
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              <div>
                                <h1 className="text-l text-left text-black font-bold mb-5">
                                  Bulk Percentage
                                </h1>
                              </div>
                            </Grid>
                            <Grid item md={6}>
                              <div>
                                <input
                                  className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                    errors.bulkPercentage &&
                                    touched.bulkPercentage
                                      ? "border-red-500"
                                      : "border-gray-600"
                                  } text-base`}
                                  id="bulkPercentage"
                                  type="text"
                                  placeholder=""
                                  onChange={handleChange("bulkPercentage")}
                                  value={values.bulkPercentage}
                                />
                                {errors.bulkPercentage &&
                                touched.bulkPercentage ? (
                                  <div className="text-red-500 text-xs mt-1 md:text-sm">
                                    {errors.bulkPercentage}
                                  </div>
                                ) : null}
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              <div>
                                <h1 className="text-l text-left text-black font-bold mb-5 ">
                                  lable
                                </h1>
                              </div>
                            </Grid>
                            <Grid item md={6}>
                              <div>
                                {" "}
                                <input
                                  className={`focus:outline-none w-full pb-2 md:pb-3 border-b focus:border-blue-900 ${
                                    errors.lable && touched.lable
                                      ? "border-red-500"
                                      : "border-gray-600"
                                  } text-base`}
                                  id="lable"
                                  type="text"
                                  placeholder=""
                                  onChange={handleChange("lable")}
                                  value={values.lable}
                                />
                                {errors.lable && touched.lable ? (
                                  <div className="text-red-500 text-xs mt-1 md:text-sm">
                                    {errors.lable}
                                  </div>
                                ) : null}
                              </div>
                            </Grid>

                            <Grid item md={12}>
                              <div className="w-max m-auto">
                                <button
                                  type="submit"
                                  className="object-center focus:outline-none bg-gamboge text-snow-900 text-base rounded border hover:border-transparent w-32 h-10"
                                  style={{
                                    boxShadow:
                                      "0px 10px 15px rgba(3, 17, 86, 0.25)",
                                    float: "right",
                                    color: "white",
                                  }}
                                >
                                  ADD
                                </button>
                              </div>
                            </Grid>
                          </Grid>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={9}>
            <div>
              <h1 className="ml-20 text-lg font-bold ">Select Books</h1>

              <div className="w-2/3 mb-1 p-1 bg-blueSapphire rounded-lg  h-14 bg-opacity-30 m-auto">
                <SearchIcon
                  style={{ float: "left", fontSize: 40, marginLeft: "10px" }}
                />
                <div className="w-2/3 h-16" style={{ float: "left" }}>
                  <input
                    type="text"
                    className="w-full h-11 p-5 "
                    id="code"
                    placeholder="Search Here"
                    value={searchTerm}
                    onChange={(event) => {
                      setsearchTerm(event.target.value);
                    }}
                    style={{ float: "left" }}
                  ></input>
                </div>
                <ReplayIcon
                  style={{ float: "left" }}
                  className="m-3"
                  onClick={() => {
                    setsearchTerm("");
                  }}
                />
              </div>

              <div
                className=" border-gray-300 border-2  m-auto p-2 pt-10 bg-white overflow-y-auto"
                style={{ width: "50vw", maxHeight: "550px" }}
              >
                <div className="w-full  h-auto m-auto">
                  {displayBooks}

                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={classes.paginationButton}
                    previousLinkClassName={classes.previousBttn}
                    nextLinkClassName={classes.nextBttn}
                    disabledClassName={classes.paginationDisabled}
                    activeLinkClassName={classes.paginationActive}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Discount;
