import React from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";

//imported components
import Header from "./components/Adithya/Header";
import Footer from "./components/Adithya/Footer";
//imported screens
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import AdminDashboard from "./screens/AdminDashboard";
import AllProducts from "./screens/AllProducts";
import CategorizedProducts from "./screens/CategorizedProducts";
import CourierDashboard from "./screens/CourierDashboard";
import CustomerProfile from "./screens/CustomerProfile";
import DeliveryDashboard from "./screens/DeliveryDashboard";
import InventoryDashboard from "./screens/InventoryDashboard";
import Newsletter from "./screens/Newsletter";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Registration from "./screens/Registration";
import ShoppingCart from "./screens/ShoppingCart";
import SingleProduct from "./screens/SingleProduct";
import Support from "./screens/Support";
import AdminLogin from "./screens/AdminLogin";

const App = () => {
  return (
    <BRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/books" component={AllProducts} />
          <Route exact path="/category/books" component={CategorizedProducts} />
          <Route exact path="/courier" component={CourierDashboard} />
          <Route exact path="/customer" component={CustomerProfile} />
          <Route exact path="/delivery" component={DeliveryDashboard} />
          <Route exact path="/inventory" component={InventoryDashboard} />
          <Route exact path="/newsletter" component={Newsletter} />
          <Route exact path="/privacy" component={PrivacyPolicy} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/book" component={SingleProduct} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/login/admin" component={AdminLogin} />
        </Switch>
      </main>
      <Footer />
    </BRouter>
  );
};

export default App;
