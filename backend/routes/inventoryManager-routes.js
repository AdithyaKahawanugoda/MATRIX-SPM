const express = require("express");
const router = express.Router();
const { protectedInventoryManager } = require("../middlewares/auth-middleware");
const {
  addNewBook,
  getAllBooks,
} = require("../controllers/inventoryManager-controller");
// route code
router.route("/addbook").post(addNewBook);
router.route("/getbooks").get(getAllBooks);
module.exports = router;
