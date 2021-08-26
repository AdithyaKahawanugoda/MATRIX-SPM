import React from "react";
import BookCard from "./BookCard";

const HomeBestSellers = () => {
  const dummyBooks = [
    {
      imgSrc: "https://i.ibb.co/LxXwdgQ/Untitled-3-1.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: "LKR 850",
      label2: "Summer OFF 20%",
    },
    {
      imgSrc: "https://i.ibb.co/NSgffqn/Untitled-4-1.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: "LKR 850",
      label2: "Summer OFF 20%",
    },
    {
      imgSrc: "https://i.ibb.co/ZHfGjyf/Untitled-2-1.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: "LKR 850",
      label2: "Summer OFF 20%",
    },
    {
      imgSrc: "https://i.ibb.co/gR94Dtp/Untitled-1-2-1.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: "LKR 850",
      label2: "Summer OFF 20%",
    },
    {
      imgSrc:
        "https://i.ibb.co/SyWbtsP/fantasticmrfoxbookcover-0-005ba5ba5ba5ba-733-733.jpg",
      title: "Fantastic Mr.Fox",
      description:
        "On a hill above the valley there was a wood. In the wood there was a huge tree. Under the tree there was a hole. In the hole lived Mr Fox and Mrs Fox and their four Small Foxes.",
      label1: "LKR 850",
      label2: "Summer OFF 20%",
    },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:gap-6 md:gap-4 sm:gap-3">
        {dummyBooks.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              window.location = "/book";
            }}
          >
            <BookCard
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              label1={item.label1}
              label2={item.label2}
              maxWidth={400}
              shadow="xl"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeBestSellers;
