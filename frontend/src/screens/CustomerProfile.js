import React from "react";
import CustomerSidebar from "../components/Deshani/CustomerSidebar";
import Profile from '../components/Deshani/Profile';
import OrderHistory from '../components/Deshani/OrderHistory';
import Wishlist from '../components/Deshani/Wishlist';
import RequestBook from '../components/Deshani/RequestBook';
import MyReview from '../components/Deshani/MyReview';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Adithya/Header";

const useStyles = makeStyles((theme)=>({
  container: {
    display: "flex"
  },
  content: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(3),
  },


}));

const CustomerProfile = () => {
  const classes = useStyles();
  return (
   
    <div className={classes.content}>
      <Router>
      <CustomerSidebar />
      
        <Switch >
        <Route exact from="/customer" component={Profile} />
        <Route exact from="/customer/orderHistory" render={props => <OrderHistory {...props} />} />
        <Route exact from="/customer/wishList" component={Wishlist} />
        <Route exact from="/customer/requestBook" render={props => <RequestBook {...props} />} />
        <Route exact from="/customer/myReviews" render={props => <MyReview {...props} />} />
        </Switch>
        </Router>
    

  </div>
  
  )
};

export default CustomerProfile;
