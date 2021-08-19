const express = require("express");
const router = express.Router();

// import  protected-routes middlewares
const {protectedCustomer} = require("../middlewares/auth-middleware");


//import controllers
const {
    getCustomerProfile,
    updateCustomerProfile,
    deleteCustomerProfile,
    updateProfilePicture,
    addToCart,
    removeCartItems,
    getCartItems,
    getOrders
} = require("../controllers/customer-controller");

//customer profile routes
router.route("/addToCart").put(protectedCustomer,addToCart);
router.route("/removeCartItems").put(protectedCustomer,removeCartItems);
router.route("/getCartItems").get(protectedCustomer,getCartItems);
router.route("/profile").get(protectedCustomer,getCustomerProfile);
router.route("/updateProfile").put(protectedCustomer,updateCustomerProfile);
router.route("/deleteProfile").delete(protectedCustomer,deleteCustomerProfile);
router.route("/updatePP").put(protectedCustomer,updateProfilePicture);
router.route("/getOrders").get(protectedCustomer,getOrders);

module.exports = router;
