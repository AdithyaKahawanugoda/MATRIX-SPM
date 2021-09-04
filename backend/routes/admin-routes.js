const express = require("express");
const router = express.Router();

const { createNewsletter,
  updateNewsletter,
  getNewsletters,
  deleteNewsletter,
  getProducts,
  updateDiscounts,
  addDiscountsForSelected,
  removeDiscounts,
  getBookRequests,
} = require("../controllers/admin-controller");

router.route("/createNewsletter").post(createNewsletter);
router.route("/updateNewsletter").put(updateNewsletter);
router.route("/getNewsletters").get(getNewsletters);
router.route("/deleteNewsletter/:id").delete(deleteNewsletter);
router.route("/getProducts").get(getProducts);
router.route("/updateDiscounts").put(updateDiscounts);
router.route("/addDiscountsForSelected").put(addDiscountsForSelected);
router.route("/removeDiscounts").put(removeDiscounts);
router.route("/getBookRequests").get(getBookRequests);

module.exports = router;
