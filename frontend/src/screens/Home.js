import React from "react";
import Grid from "@material-ui/core/Grid";
import BookCard from "../components/Adithya/BookCard";
const Home = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="border border-black border-2 m-1">
            xs=12 sm=6 md=9 Top Banner
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="border border-black border-2 m-1">
            xs=12 sm=6 md=9 New Arrivals carosoule
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="border border-black border-2 m-1">
            xs=12 sm=6 md=9 Best sellers
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="border border-black border-2 m-1">
            xs=12 sm=6 md=9 Categories
          </div>
        </Grid>
      </Grid>
      <BookCard
        title={"xxxx"}
        imgSrc={
          "https://i.ibb.co/SyWbtsP/fantasticmrfoxbookcover-0-005ba5ba5ba5ba-733-733.jpg"
        }
      />
    </>
  );
};

export default Home;
