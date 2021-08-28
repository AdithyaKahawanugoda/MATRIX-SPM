const express = require("express");
const router = express.Router();

// route code
const {
  createNewsletter,
  updateNewsletter,
  getNewsletters,
  deleteNewsletter,
  addDiscount,
  getProducts,
  updateDiscounts,
  addDiscountsForSelected,
  getBookRequests,
} = require("../controllers/admin-controller");

router.route("/createNewsletter").post(createNewsletter);
router.route("/updateNewsletter").put(updateNewsletter);
router.route("/getNewsletters").get(getNewsletters);
router.route("/deleteNewsletter/:id").delete(deleteNewsletter);

router.route("/getBookRequests").get(getBookRequests);

router.route("/getProducts").get(getProducts);
router.route("/updateDiscounts").put(updateDiscounts);
router.route("/addDiscountsForSelected/").put(addDiscountsForSelected);

module.exports = router;
