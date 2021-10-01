import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const HomeBestSellers = () => {
  const [books, setBooks] = useState(null);
  const [regularOrders, setRegularOrders] = useState(null);
  const [bulkOrders, setBulkOrders] = useState(null);

  const [display, setDisplay] = useState(false);
  const [topSelling, setTopSelling] = useState([]);
  // let topSelling = [];

  const [products, setProducts] = useState(null);
  let productSales = [];

  useEffect(() => {
    const getAllBooks = async () => {
      await axios
        .get("http://localhost:6500/matrix/api/inventoryManager/get-books")
        .then((res) => {
          setBooks(res?.data?.allBooks);
          console.log(res?.data?.allBooks);
          getAllRegularOrders();
        })
        .catch((err) => {
          alert(err?.response?.data?.desc);
        });
    };
    const getAllRegularOrders = async () => {
      await axios
        .get("http://localhost:6500/matrix/api/admin/getRegularOrders")
        .then((res) => {
          setRegularOrders(res?.data?.orders);
          console.log(res?.data?.orders);
          getAllBulkOrders();
        })
        .catch((err) => {
          alert(err?.response?.data?.desc);
        });
    };
    const getAllBulkOrders = async () => {
      await axios
        .get("http://localhost:6500/matrix/api/admin/getBulkOrders")
        .then((res) => {
          setBulkOrders(res?.data?.bulkorders);
          console.log(res?.data?.bulkorders);
          findBestSellers();
        })
        .catch((err) => {
          alert(err?.response?.data?.desc);
        });
    };
    const findBestSellers = () => {
      console.log(books);
      console.log(regularOrders);
      console.log(bulkOrders);
    };
    // getAllBooks();
    const getProducts = async () => {
      try {
        await axios
          .get("http://localhost:6500/matrix/api/admin/getProducts")

          .then((res) => {
            setProducts(res.data.Products);
            let productIds = [];
            for (let i = 0; i < res.data.Products.length; i++) {
              let dataobject = {
                book: res.data.Products[i]._id,
                bookName: res.data.Products[i].publishingTitle,
                author: res.data.Products[i].translator,
                ISBN: res.data.Products[i].ISBN,
              };
              productIds.push(dataobject);
            }
            getRegularOrders(productIds);
          })
          .catch((err) => {
            alert(err.message);
          });
      } catch (err) {
        alert("error :" + err);
      }
    };
    getProducts();

    const getRegularOrders = async (book) => {
      try {
        await axios
          .get("http://localhost:6500/matrix/api/admin/getRegularOrders")

          .then((res) => {
            setRegularOrders(res.data.orders);

            for (let j = 0; j < book.length; j++) {
              let count = 0;
              for (let i = 0; i < res.data.orders.length; i++) {
                for (let x = 0; x < res.data.orders[i].orderData.length; x++) {
                  if (res.data.orders[i].orderData[x].productID) {
                    if (
                      book[j].book ===
                      res.data.orders[i].orderData[x].productID._id
                    ) {
                      count += res.data.orders[i].orderData[x].quantity;
                    }
                  }
                }
              }
              const dataobject = {
                book: book[j].book,
                bookName: book[j].bookName,
                author: book[j].author,
                ISBN: book[j].ISBN,
                count: count,
              };

              productSales.push(dataobject);
            }
            console.log(productSales);
            getBulkOrders();
          })
          .catch((err) => {
            alert(err.message);
          });
      } catch (err) {
        alert("error :" + err);
      }
    };

    const getBulkOrders = async () => {
      try {
        await axios
          .get("http://localhost:6500/matrix/api/admin/getBulkOrders")

          .then((res) => {
            for (let x = 0; x < productSales.length; x++) {
              let newCount = productSales[x].count;
              for (let i = 0; i < res.data.bulkorders.length; i++) {
                for (let j = 0; j < res.data.bulkorders[i].items.length; j++) {
                  if (res.data.bulkorders[i].items[j].productID) {
                    if (
                      productSales[x].book ===
                      res.data.bulkorders[i].items[j].productID._id
                    ) {
                      newCount += res.data.bulkorders[i].items[j].quantity;
                    }
                  }
                }
              }
              productSales[x].count = newCount;
            }

            console.log(productSales);
            setBulkOrders(res.data.bulkorders);
            getTopSellingItems();
          })
          .catch((err) => {
            alert(err.message);
          });
      } catch (err) {
        alert("error :" + err);
      }
    };

    const getTopSellingItems = () => {
      for (let i = 0; i < productSales.length; i++) {
        for (let j = i + 1; j < productSales.length; j++) {
          let temp = 0;
          if (productSales[i].count < productSales[j].count) {
            temp = productSales[i];
            productSales[i] = productSales[j];
            productSales[j] = temp;
          }
        }
      }
      console.log("productSales", productSales);
      getBookData();
    };

    const getBookData = async () => {
      productSales.map(async (item, index) => {
        setDisplay(false);
        await axios
          .get(
            `http://localhost:6500/matrix/api/inventoryManager/get-book/${item.ISBN}`
          )
          .then((res) => {
            topSelling.push(res?.data?.book);
          })
          .catch((err) => {
            alert(err.response.data.desc);
          });

        if (index === 4) {
          setDisplay(true);
          console.log(display);
          console.log("top", topSelling);
        }
      });
    };
  }, []);

  const dummyBooks = [
    {
      imgSrc: "https://i.ibb.co/LxXwdgQ/Untitled-3-1.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: " 850",
      label2: "Summer OFF 20%",
    },
    {
      imgSrc: "https://i.ibb.co/NSgffqn/Untitled-4-1.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: " 850",
      label2: "Summer OFF 20%",
    },
    {
      imgSrc: "https://i.ibb.co/ZHfGjyf/Untitled-2-1.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: " 850",
      label2: "Summer OFF 20%",
    },
    {
      imgSrc: "https://i.ibb.co/gR94Dtp/Untitled-1-2-1.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: " 850",
      label2: "Summer OFF 20%",
    },
    {
      imgSrc:
        "https://i.ibb.co/SyWbtsP/fantasticmrfoxbookcover-0-005ba5ba5ba5ba-733-733.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: " 850",
      label2: "Summer OFF 20%",
    },
  ];

  return (
    <>
      {display ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:gap-6 md:gap-4 sm:gap-3">
          {topSelling.map((item) => {
            console.log(item);
            return (
              <div
                key={item.ISBN}
                onClick={() => {
                  window.location = `/book/${item.ISBN}`;
                }}
              >
                <BookCard
                  imgSrc={item.bookImage.imagePublicId}
                  title={item.publishingTitle}
                  description={item.aboutBook}
                  label1={item.marketPrice}
                  label2={item.discountPercentage.label}
                  maxWidth={400}
                  shadow="xl"
                />
              </div>
            );
          })}
        </div>
      ) : (
        "xxxx"
      )}
    </>
  );
};

export default HomeBestSellers;
