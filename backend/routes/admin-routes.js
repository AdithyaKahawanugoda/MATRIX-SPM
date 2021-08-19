const express = require("express");
const router = express.Router();

const {
  createNewsletter,
  updateNewsletter,
  getNewsletters,
  deleteNewsletter,
  addDiscount,
  getProducts,
  updateDiscounts,
  addDiscountsForSelected
} = require("../controllers/admin-controller");

router.route("/createNewsletter").post(createNewsletter);
router.route("/updateNewsletter").put(updateNewsletter);
router.route("/getNewsletters").get(getNewsletters);
router.route("/deleteNewsletter").delete(deleteNewsletter);

router.route("/getProducts").get(getProducts);
router.route("/updateDiscounts").put(updateDiscounts);
router.route("/addDiscountsForSelected").put(addDiscountsForSelected);

module.exports = router;
