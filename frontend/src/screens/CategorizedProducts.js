import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Adithya/Header";
const data = [
  {
    BookName: "Anne of Green Gables",
    img: "https://i.ibb.co/zn6sSHM/download-1.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Dracula",
    img: "https://i.ibb.co/sQDTJ78/download-5.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "A Town Like Alice",
    img: "https://i.ibb.co/9Ns64V0/download-2.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "The Color Purple",
    img: "https://i.ibb.co/MBNrv9s/download-3.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Frankenstein",
    img: "https://i.ibb.co/LvnXySj/download-4.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Animal Farm",
    img: "https://i.ibb.co/M1drW98/download-6.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "The Handmaid's Tale",
    img: "https://i.ibb.co/tPyPrJS/download.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Barney's Version",
    img: "https://i.ibb.co/pxyhJ0X/images-1.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Breakfast of Champions",
    img: "https://i.ibb.co/YL6BRSm/images-3.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "The Brothers Karamazov",
    img: "https://i.ibb.co/2WFNjK0/images-4.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Brave New World",
    img: "https://i.ibb.co/7J9K9vm/images-5.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "City of Thieves",
    img: "https://i.ibb.co/NLmqS82/images-6.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Don Quixote",
    img: "https://i.ibb.co/FDNLntg/images-7.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Disgrace",
    img: "https://i.ibb.co/b2NZ8PH/images-8.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Crime and Punishment",
    img: "https://i.ibb.co/Wx9R4Vr/images-9.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Doomsday Book",
    img: "https://i.ibb.co/C6T8DcW/images-10.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Your House Will Pay",
    img: "https://i.ibb.co/M1xKjc9/images-11.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Rebecca",
    img: "https://i.ibb.co/RjYmp9z/images-12.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "The Silence of the Lambs",
    img: "https://i.ibb.co/zxJ83f7/images.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
  {
    BookName: "Shutter Island",
    img: "https://i.ibb.co/NLmqS82/images-6.jpg",
    description:
      "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss.",
    price: "960",
    discount: {
      lable: "SUMMER OFF",
      percentage: "20",
    },
  },
];

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

const CategorizedProducts = () => {
  const classes = useStyles();

  const [books, setBooks] = useState(data);
  const [pageNumber, setPageNumber] = useState(0);

  const bookPerPage = 5;
  const pageVisited = pageNumber * bookPerPage;

  const displayBooks = books
    .slice(pageVisited, pageVisited + bookPerPage)
    .map((book, index) => {
      return (
        <div key={index} className="w-full margin-auto h-auto">
          <div className="w-1/5 float-left p-3 ">
            <div
              className="w-full float-left shadow-2xl rounded-lg"
              style={{ height: "35vw" }}
            >
              <div style={{ height: "18vw" }}>
                <img
                  src={book.img}
                  alt="petshop-design-with-cat-and-dog-vector-21771960"
                  border="0"
                  className="rounded-t-lg"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="p-3">
                  <h1 className="text-l  font-bold mb-1 font-thinFont text-blueSapphire font-extrabold">
                    {book.BookName}
                  </h1>
                  <h1 className="text-sm  mb-1 mb-3"> {book.description}</h1>

                  <div className="w-full ">
                    <div className="w-max mr-1 float-left mt-1">
                      <h1 className="text-l  font-bold ">RS.{book.price}</h1>
                    </div>
                    <div className="w-max bg-ferrariRed float-left h-8 rounded-full p-3 pt-1">
                      {book.discount.lable} {book.discount.percentage}%
                    </div>
                  </div>
                </div>
              </div>
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
    <>
      <Header />
      <div className="w-full  h-16 p-2">
        <h1 className="text-4xl   font-bold mb-5  pl-8 pt-3 font-thinFont">
          SCIENCE FICTIONS
        </h1>
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
    </>
  );
};

export default CategorizedProducts;
