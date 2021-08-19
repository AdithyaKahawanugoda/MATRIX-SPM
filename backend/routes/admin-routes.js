const express = require("express");
const router = express.Router();

// route code
const {
  createNewsletter,
  updateNewsletter,
  getNewsletters,
  deleteNewsletter
} = require("../controllers/admin-controller");

router.route("/createNewsletter").post(createNewsletter);
router.route("/updateNewsletter").put(updateNewsletter);
router.route("/getNewsletters").get(getNewsletters);
router.route("/deleteNewsletter").delete(deleteNewsletter);

module.exports = router;
